const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const express = require('express');
const hemlet = require('helmet');
const cors = require('cors');

//import routers
const userRouter = require('./users/users-router');
const loginRouter = require('./routers/login-router');
const registerRouter = require('./routers/register-router');
const logoutRouter = require('./routers/logoutRouter');

//setup sessions and cookie options object

const sessionOptions = {
    name:'mycookie',
    secret:'cookiecrips',
    cookie: {
        maxAge: 1000*60*60,
        secure:false,
        httpOnly: true
    },
    resave:false,
    saveUninitialized: false,

    store: new knexSessionStore({
        knex: require('./data/db-config'),
        tablename:'sessions',
        sidfieldname:'sid',
        createtable: true,
        clearInterval:1000*60*60
    })
};

const server = express();

server.use(hemlet());
server.use(express.json());
server.use(cors());
server.use(session(sessionOptions));

//use routers with string decalred routes
server.use('/api/users/', userRouter);
server.use('/api/login/', loginRouter);
server.use('/api/register/', registerRouter);
server.use('/api/logout', logoutRouter);



server.get('/', (req, res) => {
    res.send(`<h1>You mind is free NEO!!</h1>`);
});

module.exports = server;
