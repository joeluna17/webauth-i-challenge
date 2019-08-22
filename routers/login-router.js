const express = require('express');
const bcrypt = require('bcryptjs');
const userdb = require('../users/users-model');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`<h2>Here in the user LOG IN Page</h2>`);
});

router.post('/', async (req, res) => {
    const {username, password} = req.body;
    
    try{
        if(username && password){
               const exsistingUser = await userdb.findBy({username}).first();
                    if(exsistingUser && bcrypt.compareSync(password, exsistingUser.password)){
                        res.status(200).json({message:`welcome ${username}`});
                    }else{
                        res.status(401).json({message: 'Invalid Credentials'});
                    }
        }else{
            res.status(401).json({message: 'Please Provide all Fields'});
        }
    }
    catch({message}){
        res.status(500).json({message});
   }

});

module.exports = router;