(function() {
  'use strict';

  var port = process.env.port || 8009;

  var http = require('http'),
    httpProxy = require('http-proxy');

  var express = require('express');
  var app = express();
  var serveStatic = require('serve-static');
  var finalhandler = require('finalhandler')

  var serve = serveStatic('./', {
    'index': ['index.html']
  });

  app.use(serve);

  var apiProxy = httpProxy.createProxyServer({
    target: 'https://dev-api.stonegateconnect.com'
  });

  app.all("/api/*", function(req, res) {
    apiProxy.web(req, res);
  });

  app.all("/Token", function(req, res) {
    apiProxy.web(req, res);
  });

  // Listen
  app.listen(port);
})();
