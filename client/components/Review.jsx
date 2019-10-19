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
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>
        <div className="review-author">
          <span className="author-by">by</span>
          <a href="#" className="review-item-author">  {props.reviewData.user}  </a>
        </div>
        <span className="review-item-date">     Oct 15, 2019   </span>
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
            <a href="#" className="review-signal vote-up-link" title="Select if this review was helpful">
              <i className="far fa-thumbs-up"></i>
              <span className="review-section-rr-txt">(<span className="positive-h-c">0</span>)</span>
            </a>
          </div>
          <div name="vote" className="updown-button-div">
            <a href="#" className="review-signal vote-down-link">
              <i className="far fa-thumbs-down"></i>
              <span className="review-section-rr-txt">(<span className="negative-h-c">0</span>)</span>
            </a>
          </div>
          <div className=" report-sec">
            {/* <a href="javascript:;" className="review-signal report-spam-link" data-value="report" aria-label="Why is this review inappropriate?" title="Report if this review was inappropriate">
              <span className="review-section-rr-img inapp-img"></span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Review;