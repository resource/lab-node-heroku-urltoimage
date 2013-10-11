var childProcess = require('child_process');
var path = require("path");
var _ = require("underscore");
var util = require("util");

/*
 * GET PhantomJS Rendering
 */
exports.index = function(req, res) {
	var childArgs = [path.join(__dirname, '../rasterize.js'), "http://raphaeljs.com/polar-clock.html", "png"];
	var execFile = process.env.PHANTOMJS_PATH || "node_modules/phantomjs/bin/phantomjs";
	var delegate = res;
	var child = childProcess.execFile(execFile, childArgs, function(err, stdout, stderr) {
		var message = JSON.parse(stdout);
		if (message.image) {
			if (message.image) {
				delegate.render('render', { image: message.image });
				child.kill();
			}
		} else {
			console.log("[stdout]",message);
		}
	});

};