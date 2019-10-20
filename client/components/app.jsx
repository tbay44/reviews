import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import Histogram from './Histogram.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayId: '7',
      ratingBreakdown: [0],
      reviews: [],
      user: {},
      avgRating: 0
    }
  }

  componentDidMount() {
    this.getReviews(this.state.displayId);
    window.addEventListener("uniqueId", (event) => {
    this.setState({
      displayId:window.uniqueId
    })
    this.getReviews(this.state.displayId);
    })

  }

  showXStarRatings(numStars){
    return this.ratingBreakdown.filter(number => number === numStars).length
  }

  getReviews(id) {
    axios.get(`/item/${id}`).then(item => this.setState({
      displayId:id,
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

