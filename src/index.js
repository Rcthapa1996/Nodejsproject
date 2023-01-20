// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { ads, account } = require('./Constants');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});
app.get('/account', (req, res) => {
    res.send(account);
});

app.post('/', (req, res) => {
    console.log("req/:", req);
    res.send(req);
})

app.post('/account', (req, res) => {
    const newData = { ...req.body, id: account.length + 1 };
    account.push(newData);
    console.log("req/account:", req, account);
    res.send([newData]);
})

app.get('/account/name', (req, res) => {
   const nameList = account.map(a=>a.name);
    res.send([nameList]);
})

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');

});