var http = require('http');
var express = require('express');
var indexRouter = require('./routes/index');
var app = express();
module.exports = app;
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', indexRouter.index );
app.get('/oauthcallback.html', indexRouter.oauthResponse );
/*app.all('/proxy/?*', function (req, res) {
    log(req);
    var body = req.body;
    var contentType = "application/x-www-form-urlencoded";
    var sfEndpoint = req.headers["salesforceproxy-endpoint"];
    if (body) {
        //if doing oauth, then send body as form-urlencoded
        if (sfEndpoint && sfEndpoint.indexOf('oauth2') > 0) {
            body = getAsUriParameters(body);
        } else {//for everything else, it's json
            contentType = "application/json";
            body = JSON.stringify(body);
        }
    }

    if((!body || JSON.stringify(body) === "\"{}\"") && (typeof sfEndpoint != "string")) {
        return res.send('Request successful (but nothing to proxy to SF)');
    }
    request({
        url: sfEndpoint || "https://login.salesforce.com//services/oauth2/token",
        method: req.method,
        headers: {"Content-Type": contentType,
            "Authorization": req.headers["x-authorization"],
            "X-User-Agent": req.headers["x-user-agent"]},
        body: body
    }).pipe(res);
});*/
app.listen(3000);
console.log('Server running at port 3000');
