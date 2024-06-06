const express = require('express');
const { checkWord, checksymmetricNumbers } = require('../controllers/palindromeController');
 

const router = express.Router();


router.post('/check-word', checkWord);
router.post('/check-symmetric', checksymmetricNumbers);
 

module.exports = router;
