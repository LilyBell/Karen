const chalk = require('chalk');
const vorpal = require('vorpal')();
const prompt = require('prompt');

module.exports = {
    get_name : function () {
        prompt.start();
        vorpal.log(chalk.magenta('What is your name?'));
        prompt.get(['name'], function (err, result) {
            vorpal.log(chalk.magenta(result.name + ', nice to meet you.'))
        })
    },

    get_title : function () {
        prompt.start();
        vorpal.log(chalk.magenta('Do you have a preferred title? [Y]es or [N]o'));
        prompt.get(['bool'], function (err, result) {
            let bool = result.bool;
            if(bool === 'Y'){
                prompt.get(['title'], function (err, result) {
                    vorpal.log(chalk.magenta('Got it! You prefer ' + result.title))
                })
            }else if(bool === 'N'){
                vorpal.log(chalk.magenta('Got it! You don\'t have a title preference.'))
            }else{
                get_title();
            }
        })
    }
};

