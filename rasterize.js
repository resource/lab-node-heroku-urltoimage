var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

var delegate = this;

if (system.args.length < 3 || system.args.length > 5) {
   
    phantom.exit(1);
    
} else {

    address = system.args[1];
    output = system.args[2];
    page.viewportSize = { width: 600, height: 600 };
    page.open(address, function(status) {
        if (status !== 'success') {
            phantom.exit();
        } else {
            window.setTimeout(function() {
                var image = page.renderBase64(output);
                console.log(JSON.stringify({image: image}));
                phantom.exit();
            }, 1000);
        }
    });

}
