const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    if(req.session && (req.session.loggedin === true)) {
        next();
    }else{
        res.status(400).json({message: "You are not logged in. Please login to proceed!"});
    }
};