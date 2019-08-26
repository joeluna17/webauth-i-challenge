const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    if(req.session){
        req.session.destroy(err => {
            if(err){
                res.status(400).send('There was a problem logging out, try agian.');
            }else{
                res.send('Logout Successful');
            }
        }) ;
     }else{
         res.end();
     }
});

module.exports = router;