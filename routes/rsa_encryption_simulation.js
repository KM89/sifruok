﻿var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('rsa_encryption_simulation', { title: 'Duomenų šifravimo proceso demonstravimo programa' });
});



module.exports = router;
