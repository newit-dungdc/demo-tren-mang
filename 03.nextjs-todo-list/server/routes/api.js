const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/user', UserController.getList);
router.post('/user', UserController.createOne);
router.get('/user/:id', UserController.getOne);
router.delete('/user/:ids', UserController.delete);

module.exports = router;