const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const port = 5003;
const {Server} = require('socket.io');
const LobbiesList = require('./lobbiesList');

// Middleware
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET','POST'],
    },
});

const lobbiesList = new LobbiesList();

server.listen(3001, () => {
    console.log('Server run');
})

// Routes
app.get('/message', async(req, res) => {
    try {
        const example = await pool.query(
            'select * from messages;'
        );
        res.json(example.rows);
    } catch {
        console.log('Uh oh');
        res.json('Uh oh');
    }
});

app.get('/user', async(req, res) => {
    try {
        const allUsers = await pool.query(
            'select * from users;'
        );
        res.json(allUsers.rows);
    } catch {
        console.error(err.message);
    }
});

app.get('/chat', async(req, res) => {
    try {
        const {cid, creationDate} = req.body;
        const chat = await pool.query(
            'insert into chatRoom (cid, creationDate) values ($1, $2);', [cid, creationDate]
        );
        res.json(chat)
    } catch {
        console.error(err.message);
    }
});

app.get('/send', async(req, res) => {
    try {
        const {message, uid, cid, date} = req.body;
        const send = await pool.query(
            'insert into messages (uid, cid, message, date) values ($1, $2, $3, $4);', [uid, cid, message, date]
        );
        res.json(send.row[0])
    } catch {
        console.error(err.message);
    }
});


app.listen(5012, () => {
    console.log('Express server running on port', port);
});