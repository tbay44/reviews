const mongoose = require('mongoose');
const data = require('./dummyData.js');
const data2 = require('./moreDummyData.js');
const data3 = require('./reviewDummy.js');
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
  title: String,
  text: String,
  user: String,
  createdAt: String,
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
  name: String,
  rating:Number,
  reviews:[reviewSchema]
})

let Item = mongoose.model('Item', itemSchema, 'tbay_review')
let Rating = mongoose.model('Rating', reviewSchema, 'tbay_review');

let fetchReviews = function(id, callback){
  Item.findOne({'id':id}, function(err, item){
    if(err) console.log(err);
    callback(null, item);
  })
}

let writeReview = function(review, id, callback){
  Item.updateOne({id:id}, {$push: {reviews:review} }, function(err, updatedComment){
    if(err) console.log(err);
    callback(null, updatedComment);
  })
}

// Functions to seed DB

// const almostComplete = data.addTitleAndNewText(data3, data2.data2)
// const complete = data.pushReviews(almostComplete, data.data);
// Item.insertMany(complete);

module.exports = {fetchReviews, writeReview};
