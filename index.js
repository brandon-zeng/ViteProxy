var http = require("http");
var httpProxy = require("http-proxy");

// reverse proxy
var proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {
    var target,
        domain = req.headers.host,
        host = domain.split(":")[0];
    ////////////////// change this as per your local setup 
    ////////////////// (or create your own more fancy version! you can use regex, wildcards, whatever...)
    if (host === "www.vitestore.com") target = {host: "http://www.vitestore.com", port: "3000"};
    if (host === "message.vitestore.com") target = {host: "https://www.vitestore.com", port: "5555"};
    //////////////////
    proxy.web(req, res, {
        target: target
    });
}).listen(80);