// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.use(express.static('website'));
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})



//Routes










/****Code from course **/
/*
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies 
const bodyParser = require('body-parser')
// Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
})


// Create JS object
const appData = {}
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function (req, res) {
  res.send(appData)
})

//Post request

app.post('/', function (req, res) {
  res.send('POST received')
})

//Storing post request data
const data = []

app.post('/addMovie', addMovie )

function addMovie (req, res){
   console.log(req.body)
   data.push(req.body)
}

*/


/**** code from course end**/