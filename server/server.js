const db = require('./db.js');
const path = require('path');
const express = require('express');
const app = express();
// app.use(express.urlencoded());
app.use(express.static(path.join(__dirname + "/../client")));
// app.use(express.json());


// app.get('/', function(req, res){
// res.send('')
//   });

app.listen(3001, () => {
  console.log('listening on port 3001...');
});
