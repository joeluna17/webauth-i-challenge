const express = require('express');
const hemlet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const userRouter = require('./users/users-router');
const loginRouter = require('./routers/login-router');
const registerRouter = require('./routers/register-router');

const server = express();

server.use(hemlet());
server.use(express.json());
server.use(cors());

server.use('/api/users/', userRouter);
server.use('/api/login/', loginRouter);
server.use('/api/register/', registerRouter);


server.get('/', (req, res) => {
    res.send(`<h1>You mind is free NEO!!</h1>`);
});

module.exports = server;
