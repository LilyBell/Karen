const setup = require('./src/setup');
const cfg = require('./config');
const hello = require('./src/hello_protocol');

var dd = cfg.default.delimiter;
var dg = cfg.default.greeting;
var frn = cfg.default.first_run;

setup.set_delimiter(dd);

if(frn) {

} else {
    hello.greeting(dg);
}

