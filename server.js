// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');
let cache = require('apicache');


// proxy middleware options
var options = {
        target: 'https://html5.gamemonetize.com/2nar7qp7ooku6khswx07bji096e7micp/', // target
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true                    // proxy websockets
    };

// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();
    app.use('/', exampleProxy);
    app.listen(3000);