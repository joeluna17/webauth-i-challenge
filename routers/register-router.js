const express = require('express');
const bcrypt = require('bcryptjs');
const userdb = require('../users/users-model');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`<h2>Here in the Register Page.</h2>`);
});

router.post('/', async (req, res)=> {
   const user = req.body;
   const hash = bcrypt.hashSync(user.password, 12);
   user.password = hash;
    
   try{
        const newUser = await userdb.registerUser(user);
        res.status(201).json(newUser);
   }
   catch({message}){
        res.status(500).json({message});
   }

});

module.exports = router;