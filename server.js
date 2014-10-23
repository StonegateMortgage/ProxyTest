(function() {
  'use strict';

  var inAzure = process.env.WEBSITE_NODE_DEFAULT_VERSION !== undefined;
  var port = process.env.port || 8009;
  var apiUrl = inAzure ? process.env.BaseServiceUrl : 'http://localhost:62142/';

  var http = require('http'),
    httpProxy = require('http-proxy'),
    express = require('express'),
    app = express(),
    serveStatic = require('serve-static'),
    finalhandler = require('finalhandler');

  var serve = serveStatic('./', {
    'index': ['index.html']
  });

  app.use(serve);

  var apiProxy = httpProxy.createProxyServer({
    "target": apiUrl
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
