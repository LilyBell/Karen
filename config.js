var config = {};

config.default = {
    'first_run' : 'true',
    'delimiter': 'karen$',
    'greeting': 'Hello. I\'m Karen. \nWhat would you like to build today?',
    'primary_color' : 'magenta'
};

config.first_run = {
    'greeting' : 'Hello, I\'m Karen.',
    'name': 'What\'s your name?'
};

config.user = {};

module.exports = config;