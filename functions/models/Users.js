"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Users = undefined;

var _connectDB = require('../connectDB');

var _connectDB2 = _interopRequireDefault(_connectDB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = exports.Users = function Users() {
    _connectDB2.default.authenticate().then(function () {
        console.log('Connection has been established successfully.');
        return 'Connection has been established successfully.';
    }).catch(function (err) {
        console.error('Unable to connect to the database:', err);
        return 'Unable to connect to the database: ' + err;
    });
};