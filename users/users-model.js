const db = require('../data/db-config');

const registerUser = (user) => {
    return db('users')
             .insert(user, 'id')
             .then(ids => {
                 const [id] = ids;
                 return findById(id);
             });
}

const findBy = (filter) => {
    return db('users')
            .where(filter);
}

const findById = (id) => {
    return db('users')
                    .where({id})
                    .first();
}   



module.exports = {
    registerUser,
    findById,
    findBy
};