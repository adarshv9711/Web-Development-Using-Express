var express = require('express');
var router = express.Router();

let home= require('../controllers/home.js');

router.get('/',home.home);
router.post('/',home.submit);
router.get('/login',home.redirect);
router.get('/logout',home.logout);
router.post('/login',home.redirect);


module.exports = router;