const vorpal = require('vorpal')();
const chalk = require('chalk');


module.exports = { set_delimiter: function (delimiter) {
    vorpal
        .delimiter(delimiter)
        .show();
}
};

