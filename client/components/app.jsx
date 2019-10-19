import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import Histogram from './Histogram.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayId: '',
      ratingBreakdown: [0],
      reviews: [],
      user: {},
      avgRating: 0
    }
    // this.showXStarRatings = this.showXStarRatings.bind();
  }

  componentDidMount() {
    this.getReviews();
    console.log(this.state.user)
  }

  showXStarRatings(numStars){
    return this.ratingBreakdown.filter(number => number === numStars).length
  }

  getReviews() {
    axios.get("/item").then(item => this.setState({
      user: item.data,
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
    // console.log(this.state.user)
    return (
      <div className="review-component">
        <div id="histogram">
          <Histogram ratingBreakdown={this.state.ratingBreakdown} avgRating={this.state.avgRating}
          xStarRatings={this.showXStarRatings}/>
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

