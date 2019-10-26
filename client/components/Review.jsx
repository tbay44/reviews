import React from 'react';
import ReactDOM from 'react-dom';


const Review = (props) => (

// Rating stars, date and author
  <div>
    <div className="ebay-review-section">
      <div className="ebay-review-section-l">
        <div className="ebay-star-rating">
          <div>
            <span className="star-rating">
              <i className="fas fa-star" style={props.reviewData.rating/2 > 0 ? {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.reviewData.rating/2 > 1 ? {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.reviewData.rating/2 > 2 ? {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.reviewData.rating/2 > 3 ? {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star"style={props.reviewData.rating/2 > 4 ? {color: '#f18e00'}: {color:'#999'}}></i>
            </span>
          </div>
        </div>
        <div className="review-author">
          <span className="author-by">by</span>
          <a href="#" className="review-item-author">  {props.reviewData.user}  </a>
        </div>
        <span className="review-item-date">{props.reviewData.createdAt ? props.reviewData.createdAt : 'Oct 10 2019'}</span>
      </div>

{/* Actual Review */}
      <div className="ebay-review-section-r">
        <p className="review-item-title wrap-spaces">{props.reviewData.title}</p>
        <p className="review-item-content wrap-spaces">{props.reviewData.text}</p>

        <div className="reviews-images">
          <ul>
          </ul>
        </div>
        <p className="review-attr">
          <span className="rvw-attr">Verified purchase:</span>
          <span className="rvw-val">yes{props.reviewData.verified}</span>

          <span className="rvw-attr-pipe"> | </span>
          <span className="rvw-attr">Condition:</span>
          <span className="rvw-val capitalize">new</span>
          <span className="rvw-attr-pipe"> | </span>
          <span className="rvw-attr">Sold by:</span>
          <span className="rvw-val">{props.seller}</span>
        </p>

{/* Upvote downvote buttons */}
        <div className="review-btns">
          <div className="updown-button-div">
            <a href="#" className="review-signal vote-up-link">
              <i className="far fa-thumbs-up"></i>
              <span className="review-section-rr-txt">(<span className="positive-h-c">{props.reviewData.helpful}</span>)</span>
            </a>
          </div>
          <div name="vote" className="updown-button-div">
            <a href="#" className="review-signal vote-down-link">
              <i className="far fa-thumbs-down"></i>
              <span className="review-section-rr-txt">(<span className="negative-h-c">{props.reviewData.notHelpful}</span>)</span>
            </a>
          </div>
          <div className=" report-sec">
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Review;