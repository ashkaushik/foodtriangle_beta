var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('menus');
 
var service = {};
 
service.getAll = getAll;
service.getById = getById;
service.add = add;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function getAll() {
    var deferred = Q.defer();
 
    db.menus.find().toArray(function (err, menus) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return menus (without hashed passwords)
        menus = _.map(menus, function (menu) {
            return _.omit(menu, 'hash');
        });
 
        deferred.resolve(menus);
    });
 
    return deferred.promise;
}
 
function getById(_id) {
    var deferred = Q.defer();
 
    db.menus.findById(_id, function (err, menu) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (menu) {
            // return menu (without hashed password)
            deferred.resolve(_.omit(menu, 'hash'));
        } else {
            // menu not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
function add(menuParam) {
    var deferred = Q.defer();
 
    // validation
    // db.menus.findOne(
    //     { email: menuParam.email },
    //     function (err, menu) {
    //         if (err) deferred.reject(err.name + ': ' + err.message);
 
    //         if (menu) {
    //             // email already exists
    //             deferred.reject('Email "' + menuParam.email + '" is already taken');
    //         } else {
    //             createmenu();
    //         }
    //     });
    addItem();
 
    function addItem() {
        // var menu = menuParam;
        // db.menus.insert(
        //     menu,
        //     function (err, doc) {
        //         if (err) deferred.reject(err.name + ': ' + err.message); 
        //         deferred.resolve();
        //     });
        console.log(menuParam);
    } 
    return deferred.promise;
}
 
function update(_id, menuParam) {
    var deferred = Q.defer();
 
    // validation
    db.menus.findById(_id, function (err, menu) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (menu.email !== menuParam.email) {
            // email has changed so check if the new email is already taken
            db.menus.findOne(
                { email: menuParam.email },
                function (err, menu) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
 
                    if (menu) {
                        // email already exists
                        deferred.reject('Email "' + req.body.email + '" is already taken')
                    } else {
                        updatemenu();
                    }
                });
        } else {
            updatemenu();
        }
    });
 
    function updatemenu() {
        // fields to update
        var set = {
            firstName: menuParam.firstName,
            lastName: menuParam.lastName,
            email: menuParam.email,
        };
 
        // update password if it was entered
        if (menuParam.password) {
            set.hash = bcrypt.hashSync(menuParam.password, 10);
        }
 
        db.menus.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
function _delete(_id) {
    var deferred = Q.defer();
 
    db.menus.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });
 
    return deferred.promise;
}