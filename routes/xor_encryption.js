var express = require('express');
var router = express.Router();
var cryptoXor = require('crypto-xor');


router.get('/', function(req, res, next) {
    res.render('xor_encryption', { title: 'Duomenų šifravimo proceso demonstravimo programa' });
});

router.post('/', function (req, res, next) {
    var receivedData = req.body.data;
    var receivedKey = req.body.key;
    var encrypted = req.body.encrypted;

    if (encrypted == 'false') {
        var encryptedString = cryptoXor.encode(receivedData, receivedKey);
        res.send(encryptedString);
    }

    if (encrypted == 'true') {
        var decryptedString = cryptoXor.decode(receivedData, receivedKey);
        res.send(decryptedString);
    }
});

module.exports = router;
