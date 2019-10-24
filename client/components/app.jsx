import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import Histogram from './Histogram.jsx';
import ReviewForm from './ReviewForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayId: '78',
      ratingBreakdown: [0],
      reviews: [],
      user: {},
      avgRating: 0,
      goodValuePercent:0,
      wouldRecommendPercent:0,
      goodQualityPercent:0,
      showMe:false
    }
    this.formPopUp = this.formPopUp.bind(this);
    this.formHide = this.formHide.bind(this);

  }

  componentDidMount() {
    this.getReviews(this.state.displayId);
    window.addEventListener("uniqueId", (event) => {
    this.setState({
      displayId: window.uniqueId
    })
    })

  }

  formPopUp(){
    this.setState({
      showMe:true
    })
  }

  formHide(){

    this.setState({
      showMe:false
    })
  }

  showXStarRatings(numStars){
    return this.ratingBreakdown.filter(number => number === numStars).length
  }

  avgGoodValue(){
    let trueCounter = 0;
    reviews.forEach((review) => {

    })
  }

  getReviews(id) {
    axios.get(`http://tbay-reviews.us-east-2.elasticbeanstalk.com//item/${id}`).then(item => this.setState({
      displayId:id,
      item: item.data,
      reviews: item.data.reviews,
      ratingBreakdown: item.data.reviews.map(review => Math.ceil(review.rating / 2))

    }))
    .then(() => {
      this.setState({
        avgRating: Math.round((this.state.ratingBreakdown
          .reduce((acc, total) => acc + total) / this.state.ratingBreakdown.length) * 10) / 10
      })
    })
  }

  render() {
    return (
      <div className="review-component">
        <div>
          <ReviewForm displayId={this.state.displayId} showMe={this.state.showMe} hideMe={this.formHide}/>
        </div>
        <div id="histogram">
          <Histogram ratingBreakdown={this.state.ratingBreakdown} avgRating={this.state.avgRating}
          xStarRatings={this.showXStarRatings} popUp={this.formPopUp}/>
        </div>
        <div className="reviews-right">
          <div className="reviews-header">
            <h2 className="review-h2">Most relevant reviews</h2>
          </div>
          {this.state.reviews.map((review) =>
            <Review reviewData={review} seller={this.state.user.seller}/>
          )}
        </div>
      </div>
    )
  }

}

export default App;

ReactDOM.render(<App />, document.getElementById('reviews'));

