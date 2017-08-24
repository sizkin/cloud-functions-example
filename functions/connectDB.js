"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize2 = require('sequelize');

var _sequelize3 = _interopRequireDefault(_sequelize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sequelize = new _sequelize3.default('test', 'root', '12345678', {
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/cloudsql/banalava-studio:us-central1:mysql-for-firebase'
    }
});

exports.default = _sequelize;