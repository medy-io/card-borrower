// let url = 'http://mylogger.io/log';

// function logger(message) {
//     console.log(message);
// }

function log(req, res, next) {
    console.log('Logging...');
    next();
};

// module.exports.logger = logger;
module.exports = log;