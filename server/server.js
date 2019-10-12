const db = require('./db.js')

const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded());


app.get('/', function(req, res){
  res.send(index.html);
});

app.listen(3001, () => {
  console.log('listening on port 3001...');
});
