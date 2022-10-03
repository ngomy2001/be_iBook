var express = require('express');
var router = express.Router();
const { login } = require('../../Controllers/AuthController');

router.post('/login', login);

module.exports = router;
