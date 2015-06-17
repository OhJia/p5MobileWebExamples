var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./simpleDraw')).listen(8080);