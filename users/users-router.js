const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`<h2>Here in the user DB</h2>`);
});

module.exports = router;