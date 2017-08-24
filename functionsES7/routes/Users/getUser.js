"use strict";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const getUser = async (userId) => {
    // admin.database().ref(`/users/${req.user.uid}/messages/${messageId}`).once('value')
    let _user;

    try {
        // console.log(userId);
        _user = await admin.database().ref(`/users/${userId}`).once('value');
    } catch(e) {
        console.log(e);
        _user = {'error': e.message};
    }


    return Promise.resolve(_user);
};

export { getUser };
