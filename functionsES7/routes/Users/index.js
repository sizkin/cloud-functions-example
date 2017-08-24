"use strict";

import { getUser } from "./getUser";

const Users = class {
    constructor() {

    }
}

Object.defineProperty(Users.prototype, 'getUser', {
    enumerable: true, // Set to True
    configurable: true,
    writable: true,
    value: getUser
});

export default Users;
