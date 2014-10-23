(function () {
    'use strict';

    var port = process.env.port || 8009;

    var http = require('http'),
        httpProxy = require('http-proxy');

    httpProxy.createServer({
        target: 'https://dev-api.stonegateconnect.com/'
        //secure: true
    }).listen(port);
})();
