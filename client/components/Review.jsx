import React from 'react';
import ReactDOM from 'react-dom';


const Review = (props) => (

  <div>
    <div className="ebay-review-section" id="review_10000000277379282" itemprop="review" itemscope="" itemtype="https://schema.org/Review">
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
          <a _sp="p2047675.m3946.l7022" href="https://www.ebay.com/usr/btd1957310" className="review-item-author" title="btd1957310">  btd1957sdfsdf310  </a>
        </div>
        <span className="review-item-date">     Oct 15, 2019   </span>
      </div>

      <div className="ebay-review-section-r">
        <p itemprop="name" className="review-item-title wrap-spaces">Matcha</p>
        <p itemprop="reviewBody" className="review-item-content wrap-spaces">137% better for you than green tea great price.</p>


        <div className="reviews-images">
          <ul>
          </ul>
        </div>
        <p className="review-attr">
          <span className="rvw-attr">Verified purchase:</span>
          <span className="rvw-val">Yes</span>

          <span className="rvw-attr-pipe"> | </span>
          <span className="rvw-attr">Condition:</span>
          <span className="rvw-val capitalize">new</span>
          <span className="rvw-attr-pipe"> | </span>
          <span className="rvw-attr">Sold by:</span>
          <span className="rvw-val">alovitox</span>
        </p>
        <div className="review-btns">
          <div name="vote" className="updown-button-div">
            <a href="javascript:;" className="review-signal vote-up-link" data-value="up" aria-label="0 people found this review helpful, Vote as helpful" title="Select if this review was helpful">
              <i class="far fa-thumbs-up"></i>
              <span className="review-section-rr-txt">(<span className="positive-h-c">0</span>)</span>
            </a>
          </div>
          <div name="vote" className="updown-button-div">
            <a href="javascript:;" className="review-signal vote-down-link" data-value="down" aria-label="0 out of 5 stars" title="Select if this review was unhelpful">
              <i class="far fa-thumbs-down"></i>
              <span className="review-section-rr-txt">(<span className="negative-h-c">0</span>)</span>
            </a>
          </div>
          <div className=" report-sec">
            <a href="javascript:;" className="review-signal report-spam-link" data-value="report" aria-label="Why is this review inappropriate?" title="Report if this review was inappropriate">
              <span className="review-section-rr-img inapp-img"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Review;