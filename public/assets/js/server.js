// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


// => HTML GET Requests  
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../../index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname,'../../notes.html')));
    
// If no matching route is found default to home
app.get('*', (req, res) => res.sendFile(path.join(__dirname,'../../index.html')));

    // API GET Requests  
    // const notes = './Develop/db/db.json';
    // app.get('/api/notes', (req, res) => {
    //     fs.readFile(notes, (err, data) => {
    //         if (err) throw err;
    //         db = JSON.parse(data);
    //         res.send(db);
    //       });
    // });
  
    // API POST Requests
    // app.post('/api/notes', (req, res) => {
    //     fs.readFile(notes, (err,data) => {
    //         if (err) throw err;
    //         db = JSON.parse(data);
    //         db.push(req.body);
    //         for (let i = 0; i < db.length; i++) {
    //             let id = 1;
    //             db.id = id;
    //             id++;
    //             return res.json(db[i]);
    //         };
    //         fs.writeFile(notes, db, (err, data) => {
    //             if (err) throw err;
    //           });
    //         });
    //     });
      