
// node modules
var _     = require('underscore'),
    path  = require('path'),
    spawn = require('child_process').spawn,
    util  = require('util');

// render index page
exports.index = function(req, res){

    var uri = req.query.uri || 'http://raphaeljs.com/polar-clock.html';
    var args = [ path.join(__dirname, '../rasterize.js'), uri, 'png' ];
    var exec = process.env.PHANTOMJS_PATH || 'node_modules/phantomjs/bin/phantomjs';
    var phantomjs = spawn(exec, args);
    var json = { image : '', error : '' };
    var result = '';

    // capture result
    phantomjs.stdout.on('data', function(data){
        result += data;
    });

    // capture errors
    phantomjs.stderr.on('data', function(data){
        json.error += data;
    });

    // close pid
    phantomjs.on('close', function(code){

        // test result
        if (result !== ''){
            result = JSON.parse(result);
            if (result.image !== undefined){
                json.image = result.image;
            }
        }

        // render data
        res.render('render', json);

        // exit pid
        phantomjs.kill( code === 0 ? 'SIGHUP' : 'SIGKILL');

    });

};

