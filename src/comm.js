const vorpal = require('vorpal')();
const chalk = require('chalk');



module.exports = {
    log : function (greeting) {
        vorpal.log(chalk.magenta(greeting));
    }
};

