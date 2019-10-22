import React from 'react';
import ReactDOM from 'react-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      title: '',
      text: '',
      wouldRecommend: '',
      goodValue: '',
      goodQuality: ''
    }
  }
  handleClick(num) {
    this.setState({
      stars:num
    })
  }

  render() {
    return (
      <div className="overlayForm">
        <div className="reviewForm-header">
          <h1>Product Name shall go here!</h1>
          <h2>Rate this product</h2>
          <div className="ebay-star-rating">
            <span className="star-rating">
              <i className="fas fa-star form-star"
                onClick={this.handleClick(1)}
                style={this.state.stars > 0 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={this.handleClick(2)}
                style={this.state.stars > 1 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={this.handleClick(3)}
                style={this.state.stars > 2 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={this.handleClick(4)}
                style={this.state.stars > 3 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={this.handleClick(5)}
                style={this.state.stars > 4 ? { color: '#f18e00' } : { color: '#999' }}></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewForm;