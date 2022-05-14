// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs')


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//API Routes

//GET * should return the index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));