"use strict";

import _sequelize from '../connectDB';

export let Users = function() {
    _sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            return 'Connection has been established successfully.';
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return `Unable to connect to the database: ${err}`;
        });
};
