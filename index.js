const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//monggodb connector

const port = 3000;
const MongoDbConnector = require('./mongoDbConnector');
const mongoDbConnector = new MongoDbConnector({
    name: 'noderestAPI',
    host: 'mongodb://localhost:27017'
});
mongoDbConnector.connect();

//monggodb connector 


// helloworld 

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.use(bodyParser.json());

// create

app.post('/user', (req, res) => {
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body: req.body
    });
});

// create

// login 

app.post('/login', (req, res) => {
    res.send({
        message: 'LOGIN USER: POST /login',
        body: req.body
    });
});

// login

// read

app.get('/user', (req, res) => {
    res.send('GET USER LIST: GET /user');
});

app.get('/user/:id', (req, res) => {
    res.send('GET USER: GET /user/' + req.params.id);
});

// read 

// update 

app.patch('/user/:id', (req, res) => {
    const msg = {
        message: 'UPDATE USER: PATCH /user/' + req.params.id,
        body: req.body
    };
    res.send(msg);
});

// update

// delete

app.delete('/user/:id', (req, res) => {
    res.send('DELETE USER: DELETE /user/' + req.params.id);
});

// delete

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});



//monggodb connector

['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, async() => {
        console.log("Stop signal received");
        mongoDbConnector.disconnect();
        console.log("Exiting now, bye!");
        process.exit(0);
    });
});

//monggodb connector