"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _getUser = require("./getUser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function Users() {
    (0, _classCallCheck3.default)(this, Users);
};

Object.defineProperty(Users.prototype, 'getUser', {
    enumerable: true, // Set to True
    configurable: true,
    writable: true,
    value: _getUser.getUser
});

exports.default = Users;