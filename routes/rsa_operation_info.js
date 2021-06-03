var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('rsa_operation_info', { title: 'Duomenų šifravimo proceso demonstravimo programa' });
});



module.exports = router;





