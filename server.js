// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs')

// Sets up the Express App
const app = express();
var PORT =  process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

//Routes
//GET route render the main html page
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
