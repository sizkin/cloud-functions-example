"use strict";

import Sequelize from 'sequelize';

const _sequelize = new Sequelize('test', 'root', '12345678', {
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/cloudsql/banalava-studio:us-central1:mysql-for-firebase'
    }
});

export default _sequelize;
