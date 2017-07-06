var express = require('express'),
  app = express(),
  path = require('path'),
  http = require('http'),
  https = require('https');

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  return res.sendFile(__dirname + '/public/index.html');
});

// For debugging
var h = http.createServer(app);
h.listen(8000, function () {
  var host = h.address().address;
  var port = h.address().port;
  console.log('HTTPS listening on %s:%d', host, port);
});

// var http_server = http.createServer(function (req, res) {
//     res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//     res.end();
// }).listen(8888);

// var https_server = https.createServer(options, app);
// https_server.listen(8443, function () {
//      var host = https_server.address().address;
//      var port = https_server.address().port;
//      console.log('HTTPS listening on %s:%d', host, port);
// });
