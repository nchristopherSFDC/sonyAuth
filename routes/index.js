exports.index = function(request, response) {
	response.render('./index.html');
}
exports.oauthResponse = function(request, response) {
	response.render('./oauthcallback.html');
}
