var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');
 
// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
<<<<<<< HEAD
router.get('/', getAll);
=======
router.get('/getAllUsers', getAll);
>>>>>>> origin/foodtriangle_node
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);
 
module.exports = router;
 
function authenticate(req, res) {
<<<<<<< HEAD
    userService.authenticate(req.body.username, req.body.password)
=======
    userService.authenticate(req.body.email, req.body.password)
>>>>>>> origin/foodtriangle_node
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
<<<<<<< HEAD
                res.status(401).send('Username or password is incorrect');
=======
                res.status(401).send('email or password is incorrect');
>>>>>>> origin/foodtriangle_node
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}