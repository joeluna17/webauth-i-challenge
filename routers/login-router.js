const express = require('express');
const bcrypt = require('bcryptjs');
const userdb = require('../users/users-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h2>Here in the user LOG IN Page</h2>`);
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    req.session.loggedin = false;
    userdb.findBy({ username })
        .first()
        .then(user => {    
            if (user && bcrypt.compareSync(password, user.password)) { 
                req.session.loggedin = true;
                res.status(200).json({ message: `Welcome ${user.username}!`});
            } else {
                res.status(401).json({ message: 'Try again!' });
            }
        })
        .catch(error=>{
            res.status(500).json(error);
        });

});

module.exports = router;