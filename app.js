const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout, null);

const setup = require('./src/setup');
const cfg = require('./config');
const comm = require('./src/comm');
const f = require('./src/first_run');
let dd = cfg.default.delimiter;
let dg = cfg.default.greeting;
let frn = cfg.default.first_run;

setup.set_delimiter(dd);

if(frn) {
    let gr = cfg.first_run.greeting;
    comm.log(gr);
    f.get_name();


} else {
    comm.log(dg);
}



