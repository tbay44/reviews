import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import Histogram from './Histogram.jsx';
import ReviewForm from './ReviewForm.jsx';
import axios from 'axios';
import '../reviewstyles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayId: '99',
      ratingBreakdown: [0],
      reviews: [],
      item: {},
      avgRating: 0,
      goodValuePercent: 0,
      wouldRecommendPercent: 0,
      goodQualityPercent: 0,
      showMe: false
    }
    this.formPopUp = this.formPopUp.bind(this);
    this.formHide = this.formHide.bind(this);

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showMe !== prevState.showMe || this.state.displayId !== prevState.displayId) {
      this.getReviews(this.state.displayId);
    }
  }

  componentDidMount() {
    this.getReviews(this.state.displayId);
    window.addEventListener("uniqueId", (event) => {
      this.setState({
        displayId: window.uniqueId
      }, ()=> {this.getReviews(this.state.displayId);
      })
    })
  }

  starPicker(rating, num){
    if(num - rating <= 0.25){
      return 'fullStar';
    } else if(num - rating > 0.25 && num-rating <= 0.75){
      return 'midStar';
    } else {
      return 'emptyStar';
    }
  }


  formPopUp() {
    this.setState({
      showMe: true
    })
  }

  formHide() {
    this.setState({
      showMe: false
    })
  }

  showXStarRatings(numStars) {
    return this.ratingBreakdown.filter(number => number === numStars).length
  }

  avgGoodValue() {
    let trueCounter = 0;
    this.state.reviews.forEach((review) => {
      if (review.goodValue) {
        trueCounter++;
      }
    })
    this.setState({
      goodValuePercent: Math.round(trueCounter / this.state.reviews.length * 100)
    })
  }

  avgGoodQuality() {
    let trueCounter = 0;
    this.state.reviews.forEach((review) => {
      if (review.goodQuality) {
        trueCounter++;
      }
    })
    this.setState({
      goodQualityPercent: Math.round(trueCounter / this.state.reviews.length * 100)
    })
  }

  avgWouldRecommend() {
    let trueCounter = 0;
    this.state.reviews.forEach((review) => {
      if (review.wouldRecommend) {
        trueCounter++;
      }
    })
    this.setState({
      wouldRecommendPercent: Math.round(trueCounter / this.state.reviews.length * 100)
    })
  }

  getStarAverage(){
    return Math.round((this.state.ratingBreakdown
      .reduce((acc, total) => acc + total) / this.state.ratingBreakdown.length) * 10) / 10
  }

  emitStarRating(){
    window.starAverage = {
      starAverage: this.getStarAverage(),
      totalRatings: this.state.ratingBreakdown.length
    };
    const starAverage = new CustomEvent(
      "starAverage",{
          detail: {
            starAverage: 'changed'
          }
        }
  )
  window.dispatchEvent(starAverage);
  }

  getReviews(id) {
    axios.get(
      `http://tbay-reviews.us-east-2.elasticbeanstalk.com/item/${id}`
      // `/item/${id}`
    ).then(item => this.setState({
      displayId: id,
      item: item.data,
      reviews: item.data.reviews.reverse(),
      ratingBreakdown: item.data.reviews.map(review => Math.ceil(review.rating / 2))

    }))
      .then(() => {
        this.setState({
          avgRating: this.getStarAverage()
        })
      })
      .finally(() => {
        this.avgGoodQuality();
        this.avgGoodValue();
        this.avgWouldRecommend();
        this.emitStarRating();
      })
  }

  render() {
    return (
      <div className="review-component">
        <div>
          <ReviewForm displayId={this.state.displayId} showMe={this.state.showMe} hideMe={this.formHide} />
        </div>
        <div id="histogram">
          <Histogram
            starPicker={this.starPicker}
            ratingBreakdown={this.state.ratingBreakdown}
            avgRating={this.state.avgRating}
            goodQuality={this.state.goodQualityPercent}
            goodValue={this.state.goodValuePercent}
            wouldRecommend={this.state.wouldRecommendPercent}
            xStarRatings={this.showXStarRatings} popUp={this.formPopUp} />
        </div>
        <div className="reviews-right">
          <div className="reviews-header">
            <h2 className="review-h3">Most recent reviews</h2>
          </div>
          {this.state.reviews.map((review) =>
            <Review reviewData={review} seller={this.state.item.seller} />
          )}
        </div>
      </div>
    )
  }

}

export default App;

ReactDOM.render(<App />, document.getElementById('reviews'));

