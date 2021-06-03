var express = require('express');
var router = express.Router();
var NodeRSA = require('node-rsa');


router.get('/', function(req, res, next) {
    res.render('rsa_encryption', { title: 'Duomenų šifravimo proceso demonstravimo programa' });
});

router.post('/', function (req, res, next) {
    var receivedData = req.body.data;
    var receivedKey = req.body.key;
    var encrypted = req.body.encrypted;

    if (encrypted == "false") {
        var publicKey = new NodeRSA(receivedKey);
        var encryptedString = publicKey.encrypt(receivedData, 'base64');
        res.json({ data: encryptedString, encrypted: "true" });
    }

    if (encrypted == "true") {
        var privateKey = new NodeRSA(receivedKey);
        var decryptedString = privateKey.decrypt(receivedData, 'utf8');
        res.json({ data: decryptedString, encrypted: "false" });
    }

    else {
        var key = new NodeRSA({ b: 1024 });
        var public_key = key.exportKey('public');
        var private_key = key.exportKey('private');

        res.json({ publicKey: public_key, privateKey: private_key });
    }
});

module.exports = router;
