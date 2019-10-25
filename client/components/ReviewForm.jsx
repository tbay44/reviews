import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      title: '',
      text: '',
      wouldRecommend: '',
      goodValue: '',
      goodQuality: '',
      createdAt:'',
      user:'RonnyTheBear'
    }
  }

  handleClick(num) {
    this.setState({
      stars: num
    })
  }

  handleTrueFalse(bool, e){
    e.preventDefault()
    this.setState({
      [e.target.name]:bool
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let today = new Date();
    axios.post(
      // `/item/${this.props.displayId}`
      `http://tbay-reviews.us-east-2.elasticbeanstalk.com/item/${this.props.displayId}`
      ,{
      itemId:this.props.displayId,
      rating:this.state.stars * 2,
      title: this.state.title,
      text: this.state.text,
      user: this.state.user,
      createdAt: today.toDateString().substring(4),
      seller: 'some cool person',
      verified: true,
      wouldRecommend: this.state.wouldRecommend,
      goodValue:this.state.goodValue,
      goodQuality: this.state.goodQuality,
      helpful: 0,
      notHelpful: 0
    }).then(() => {
      this.props.hideMe();
    });
  }

  render() {
    if(this.props.showMe){
    return (
      <div className="review-modal">
      <div name="review-form" id="writeReview">
      <form>
      <div className="review-form-subheader">
        <h1>Product Name shall go here!</h1>
          <div>
          <input type="text" placeholder="Enter your user name" name="user" onChange={(e) => this.handleChange(e)}></input>
          </div>
          <div className="review-star-rating">
          <h2>Rate this product</h2>
          <div className="ebay-star-rating">
            <span className="star-rating">
              <i className="fas fa-star form-star"
                onClick={() => this.handleClick(1)}
                style={this.state.stars > 0 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={() => this.handleClick(2)}
                style={this.state.stars > 1 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={() => this.handleClick(3)}
                style={this.state.stars > 2 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={() => this.handleClick(4)}
                style={this.state.stars > 3 ? { color: '#f18e00' } : { color: '#999' }}></i>
              <i className="fas fa-star form-star"
                onClick={() => this.handleClick(5)}
                style={this.state.stars > 4 ? { color: '#f18e00' } : { color: '#999' }}></i>
            </span>
          </div>
          </div>

          <div>
          <h2>Tell us more</h2>
          </div>
        </div>
        <div className="true-false-ratings">
          <div className="true-false-rating-item">
            <p>Would you recommend this product?</p>
            <button name="wouldRecommend" style={this.state.wouldRecommend === true ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(true, e)}>yes</button>
            <button name="wouldRecommend" style={this.state.wouldRecommend === false ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(false, e)}>no</button>
          </div>
          <div className="true-false-rating-item">
            <p>Is it a good value?</p>
            <button name="goodValue" style={this.state.goodValue === true ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(true, e)}>yes</button>
            <button name="goodValue" style={this.state.goodValue === false ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(false, e)}>no</button>
          </div>
          <div>
            <p>Is it good quality?</p>
            <button name="goodQuality" style={this.state.goodQuality === true ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(true, e)}>yes</button>
            <button name="goodQuality" style={this.state.goodQuality === false ? {opacity:"1"} : {opacity:"0.5"} } onClick={(e) => this.handleTrueFalse(false, e)}>no</button>
          </div>
        </div>
        <div className="write-review">
          <h2>Write your review</h2>
          <input type="text" placeholder="Title your review" name="title" onChange={(e) => this.handleChange(e)}></input>
          <textarea placeholder="Write your review" name="text" onChange={(e) => this.handleChange(e)}></textarea>
        </div>
        <div>
          <input type="submit" className="review-button" name="form-submit" onClick={(e) => this.handleSubmit(e)}/>
          <input type="button" className="review-button" name="cancel" value="Cancel" onClick={(e) => this.props.hideMe(e)}/>
        </div>
      </form>
      </div>
      </div>
    )
  } else {
    return (null)
  }
}
}

export default ReviewForm;