const vorpal = require('vorpal')();
const chalk = require('chalk');



module.exports = {
    greeting : function (greeting) {
        vorpal.log(chalk.magenta(greeting));
    }
};