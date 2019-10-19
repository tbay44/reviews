import React from 'react';
import ReactDOM from 'react-dom';

const Histogram = (props) => (

  <div className="review-aggregate">

    <div className="reviews-header">
      <h2 className="review-h2">Ratings and Reviews</h2>
      <a className="review-button" href="/review">Write a review</a>
    </div>
    <div className="rating-content-wrapper">
      <span className="ebay-review-start-rating">4.9</span>
      <div className="ebay-star-rating">
          <span className="star-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
      </div>
      <span className="ebay-reviews-count">44 product ratings</span>
    </div>

    <div className="reviews-histogram">
      <ul className="ebay-review-list">
        <li className="ebay-review-item">
          <div className="ebay-reviews-item-href">
            <i className="fa fa-star"></i>
            <div className="ebay-review-item-l">
              <p className="ebay-review-item-stars">5</p>
            </div>
            <div className="ebay-review-item-r">
              <i className="r-list-bg">
                <u className="r-list-fc"></u>
              </i>
              <span className="review-span">39</span>
            </div>
          </div>
        </li>
        <li className="ebay-review-item">
          <div className="ebay-reviews-item-href">
            <i className="fa fa-star"></i>
            <div className="ebay-review-item-l">
              <p className="ebay-review-item-stars">4</p>
            </div>
            <div className="ebay-review-item-r">
              <i className="r-list-bg">
                <u className="r-list-fc"></u>
              </i>
              <span className="review-span">5</span>
            </div>
          </div>
        </li>
        <li className="ebay-review-item">
          <div className="ebay-reviews-item-href">
            <i className="fa fa-star"></i>
            <div className="ebay-review-item-l">
              <p className="ebay-review-item-stars">3</p>
            </div>
            <div className="ebay-review-item-r">
              <i className="r-list-bg">
                <u className="r-list-fc"></u>
              </i>
              <span className="review-span">0</span>
            </div>
          </div>
        </li>
        <li role="img" className="ebay-review-item">
          <div className="ebay-reviews-item-href">
            <i className="fa fa-star"></i>
            <div className="ebay-review-item-l">
              <p className="ebay-review-item-stars">2</p>
            </div>
            <div className="ebay-review-item-r">
              <i className="r-list-bg">
                <u className="r-list-fc"></u>
              </i>
              <span className="review-span">0</span>
            </div>
          </div>
        </li>
        <li className="ebay-review-item">
          <div className="ebay-reviews-item-href">
            <i className="fa fa-star"></i>
            <div className="ebay-review-item-l">
              <p className="ebay-review-item-stars">1</p>
            </div>
            <div className="ebay-review-item-r">
              <i className="r-list-bg">
                <u className="r-list-fc"></u>
              </i>
              <span className="review-span">0</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div className="pie-container">
      <div role="img" className="en pie-wrpr" aria-label="100% Would recommend">
        <div className="pie">
          <div className="left">
            <span className="pie-span"></span>
          </div>
          <div className="right">
            <span className="pie-span"></span>
          </div>
        </div>
        <p className="pie-txt" data-text="agree">
          <span>Would recommend</span>
        </p>
      </div>
      <div role="img" className="en pie-wrpr" aria-label="100% Good value">
        <div className="pie">
          <div className="left">
            <span className="pie-span"></span>
          </div>
          <div className="right">
            <span className="pie-span"></span>
          </div>
        </div>
        <p className="pie-txt" data-text="agree">
          <span>Good value</span>
        </p>
      </div>
      <div role="img" className="en pie-wrpr" aria-label="100% Good quality">
        <div className="pie">
          <div className="left">
            <span className="pie-span"></span>
          </div>
          <div className="right">
            <span className="pie-span"></span>
          </div>
        </div>
        <p className="pie-txt" data-text="agree">
          <span className="pie-span">Good quality</span>
        </p>
      </div>
    </div>
  </div>
      )

export default Histogram;