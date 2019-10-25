const db = require('./db.js');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
// app.use(express.urlencoded());
app.use(express.static(path.join(__dirname + "/../client")));
app.use(express.json());
app.use(cors());

app.get('/item/:id', function (req, res) {
  // console.log(req.params.id)
  db.fetchReviews(req.params.id, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.send(item);
    }
  })
});

app.post('/item/:id', function (req, res){
  // console.log(req.body);
  db.writeReview(req.body, req.params.id, (err, updatedItem) => {
    if(err){
      console.log(err);
    } else {
      res.send(updatedItem)
    }
  })

})

app.listen(8081, () => {
  console.log('listening on port 8081...');
});
