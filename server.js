const { application } = require("express");




//HTML ROUTES
//get route for index.html
app.get('/', (req, res)=>
res.sendFile('index.html'));


//GET route for notes
app.get('/notes', (req, res)=>
res.json(reviewData));



const notes = require('./')
//API ROUTES
app.get('/api/notes', (req, res)=>
res.)