const express = require('express');
const resticted = require('../restrictedMiddleware');
const router = express.Router();


router.get('/',resticted,(req, res)=>{
    res.send(`<h2>Here in the user DB</h2>`);
});

module.exports = router;