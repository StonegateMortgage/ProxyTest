(function () {
    'use strict';

    var http = require('http'),
        httpProxy = require('http-proxy');

    httpProxy.createServer({
        target: 'https://dev-api.stonegateconnect.com/'
        //secure: true
    }).listen(8009);
})();
