"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _testCr9bf8dFirebaseAdminsdkG5y30859c9af = require('../test-cr-9bf8d-firebase-adminsdk-g5y30-859c9af407.json');

var serviceAccount = _interopRequireWildcard(_testCr9bf8dFirebaseAdminsdkG5y30859c9af);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _Users = require('./routes/Users');

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'production') {
    admin.initializeApp(functions.config().firebase);
} else {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://test-cr-9bf8d.firebaseio.com"
    });
}

var _app = (0, _express2.default)();

var authenticate = function authenticate(req, res, next) {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized');
        return;
    }
    var idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken).then(function (decodedIdToken) {
        req.user = decodedIdToken;
        next();
    }).catch(function (error) {
        res.status(403).send('Unauthorized');
    });
};

// Middleware
_app.use((0, _cors2.default)({ origin: true }));
_app.use((0, _cookieParser2.default)());
// _app.use(authenticate);

_app.get('/hello', function (req, res) {
    res.status(200).json({
        "status": "ok",
        "message": "Hello World"
    });
});

_app.get('/hello/:username', function (req, res) {
    var username = req.params.username || 'anno';
    res.status(200).json({
        "status": "ok",
        "message": 'Hello World, ' + username
    });
});

_app.get('/users/:userId', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var Users, userId, user;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        Users = new _Users2.default();
                        userId = req.params.userId || 'anno';
                        _context.next = 4;
                        return Users.getUser(userId);

                    case 4:
                        user = _context.sent;

                        // console.log(user.val());
                        res.status(200).json({
                            "status": "ok",
                            "message": user.val()
                        });
                        // const db = admin.database();
                        // const ref = db.ref("/users");
                        // ref.once('value').then(u => {
                        //     res.json(u.val());
                        // });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

var api = exports.api = functions.https.onRequest(_app);