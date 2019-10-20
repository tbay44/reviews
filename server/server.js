const db = require('./db.js');
const path = require('path');
const express = require('express');
const app = express();
// app.use(express.urlencoded());
app.use(express.static(path.join(__dirname + "/../client")));
app.use(express.json());


app.get('/item/:id', function (req, res) {
  console.log(req.params.id)
  db.fetchReviews(req.params.id, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.send(item)
    }
  })
});

app.listen(3001, () => {
  console.log('listening on port 3001...');
});
