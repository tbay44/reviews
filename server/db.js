const mongoose = require('mongoose');
const data = require('./dummyData.js')
const data2 = require('./moreDummyData.js')
mongoose.connect('mongodb+srv://FriendMiles:Igala1rele@cluster1-bpoqq.gcp.mongodb.net/test', {useUnifiedTopology: true, useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error =('))
db.once('open', function(){
  console.log('mongo up and running');
})

let reviewSchema = new mongoose.Schema({
  itemId: Number,
  rating: Number,
  avgRating: Number,
  text: String,
  user: String,
  createdAt: {$date:String},
  seller: String,
  verified: Boolean,
  wouldRecommend:Boolean,
  goodValue:Boolean,
  goodQuality:Boolean,
  helpful: Number,
  notHelpful:Number,
})

let itemSchema = new mongoose.Schema({
  id:Number,
  seller:String,
  rating:Number,
  reviews:[reviewSchema]
})

let Item = mongoose.model('Item', itemSchema, 'tbay_review')
let Rating = mongoose.model('Rating', reviewSchema, 'tbay_review');

// Functions to seed DB

// rating1.save(function(err, rating){
//   if(err) return console.error(err);
//   console.log(rating.itemId + ' is actually saved!');
// })

// const complete = data.pushReviews(data2.data2, data.data);

// Item.insertMany(complete);
