const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.listen(3001, () => {
  console.log('listening on port 3001...');
})
