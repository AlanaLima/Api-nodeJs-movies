const express = require('express');
const router = require ('express').Router();



/* Login Router */

const loginController = require('../controllers').logincontroller;

router.get('/login', loginController.getAll);
router.get('/login/:id', loginController.getLoginById);
router.get('/login/:email/:password', loginController.getLoginByCredentials)
router.post('/login', loginController.postLogin);
router.post('/loginuser', loginController.postLoginUser);
// router.put('/login/:id', loginController.putEmail);
// router.put('login/password/:id', loginController.putPassword)
// router.delete('/login/:id', loginController.deleteLogin);

/* User Router */

const userController = require('../controllers').usercontroller;

router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUserById);
// router.get('/personlogin', personController.getAllPeopleLogin);

router.post('/user', userController.postUser);
router.post('/userlist', userController.postUserList);
// router.put('/person/:id', personController.putDesciption);




/* List Router */

const listController = require('../controllers').listcontroller;

router.get('/lists', listController.getAllList);
router.get('/lists/:id', listController.getListById);
router.post('/lists', listController.postList);
router.post('/listmovie', listController.addMovie);


const moviesController = require('../controllers').moviescontroller;
router.get('/movies', moviesController.getAllMovies);
router.get('/movies/:id', moviesController.getMovieById);
router.post('/movies', moviesController.postMovie);

module.exports = router;