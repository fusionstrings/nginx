/// <reference path="../src/types/njs/ngx_stream_js_module.d.ts" />

var is_http = 0;

function address(stream) {
    return `Hi: ${stream.remoteAddress}`;
}

/**
 * @param {NginxStreamRequest} stream
 */
function detect_http(stream) {
	
	stream.on('upload', function (data, flags) {
		var n = data.indexOf('\r\n');
		if (n != -1 && data.substr(0, n - 1).endsWith(" HTTP/1.")) {
			is_http = 1;
		}

		if (data.length || flags.last) {
			stream.done();
		}
	});
}

/**
 * @param {NginxStreamRequest} stream
 */
function upstream_type(s) {
	return is_http ? "httpback" : "tcpback";
}

export default {address, detect_http, upstream_type};