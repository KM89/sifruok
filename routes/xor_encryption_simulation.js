var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('xor_encryption_simulation', { title: 'Duomenų šifravimo proceso demonstravimo programa' });
});



module.exports = router;
