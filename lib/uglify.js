var through = require('through2');
var uglify = require('uglify-js').minify;

module.exports = function() {
	return through(function(buffer, encoding, callback) {
		var data = uglify(buffer.toString(), {fromString: true});
		callback(null, data.code);
	});
};