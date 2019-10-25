import React from 'react';
import ReactDOM from 'react-dom';

const Histogram = (props) => {
  console.log(props.wouldRecommend)
  return(

// Header
  <div className="review-aggregate">
    <div className="reviews-header">
      <h2 className="review-h2">Ratings and Reviews</h2>
      <a className="review-button" onClick={() => props.popUp()}>Write a review</a>
    </div>

    {/* Average rating component */}
    <div className="rating-content-wrapper">
      <span className="ebay-review-start-rating">
      {props.avgRating}
      </span>
      <div className="ebay-star-rating">
          <span className="star-rating">
          <i className="fas fa-star" style={props.avgRating > 0 ?
             {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.avgRating > 1 ?
                 {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.avgRating > 2 ?
                 {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star" style={props.avgRating > 3 ?
                 {color: '#f18e00'}: {color:'#999'}}></i>
              <i className="fas fa-star"style={props.avgRating > 4 ?
                 {color: '#f18e00'}: {color:'#999'}}></i>
          </span>
      </div>
      <span className="ebay-reviews-count">{props.ratingBreakdown.length} product ratings</span>
    </div>

    {/* Rating Breakdown */}
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
                <u className="r-list-fc" style=
                {{width:`${Math.floor((props.xStarRatings(5)* 100)/props.ratingBreakdown.length)}%`}}></u>
              </i>
              <span className="review-span">{props.xStarRatings(5)}</span>
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
                <u className="r-list-fc" style=
                {{width:`${Math.floor((props.xStarRatings(4)* 100)/props.ratingBreakdown.length)}%`}}></u>
              </i>
              <span className="review-span">{props.xStarRatings(4)}</span>
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
                <u className="r-list-fc" style=
                {{width:`${Math.floor((props.xStarRatings(3)* 100)/props.ratingBreakdown.length)}%`}}></u>
              </i>
              <span className="review-span">{props.xStarRatings(3)}</span>
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
                <u className="r-list-fc"
                style=
                {{width:`${Math.floor((props.xStarRatings(2)* 100)/props.ratingBreakdown.length)}%`}}>
                </u>
              </i>
              <span className="review-span">{props.xStarRatings(2)}</span>
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
                <u className="r-list-fc" style=
                {{width:`${Math.floor((props.xStarRatings(1)* 100)/props.ratingBreakdown.length)}%`}}></u>
              </i>
              <span className="review-span">{props.xStarRatings(1)}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    {/* Pie Buffet */}
    <div className="pie-container">
      <div className="en pie-wrpr" >
        <div className="pie" data-percent={props.wouldRecommend + '%'}>
          <div className="left">
          <span className="pie-span" style={{transform: `rotateZ(${
              props.wouldRecommend <=50 ? -180 : props.wouldRecommend * -3.6
            }deg)`}}></span>
          </div>
          <div className="right">
          <span className="pie-span" style={{transform: `rotateZ(${
              props.wouldRecommend >= 50 ? 0 : (50 + props.wouldRecommend) * -3.6
            }deg)`}}></span>
            </div>
        </div>
        <p className="pie-txt">
          <span>Would recommend</span>
        </p>
      </div>
      <div className="en pie-wrpr">
        <div className="pie" data-percent={props.goodValue + '%'}>
          <div className="left">
          <span className="pie-span" style={{transform: `rotateZ(${
              props.goodValue <=50 ? -180 : props.goodValue * -3.6
            }deg)`}}></span>
          </div>
          <div className="right">
          <span className="pie-span" style={{transform: `rotateZ(${
              props.goodValue >= 50 ? 0 : (50 + props.goodValue) * -3.6
            }deg)`}}></span>
            </div>
        </div>
        <p className="pie-txt" data-text="agree">
          <span>Good value</span>
        </p>
      </div>
      <div role="img" className="en pie-wrpr">
        <div className="pie" data-percent={props.goodQuality + '%'}>
          <div className="left">
            <span className="pie-span" style={{transform: `rotateZ(${
              props.goodQuality <= 50 ? -180 : props.goodQuality * -3.6
            }deg)`}}></span>
          </div>
          <div className="right">
          <span className="pie-span" style={{transform: `rotateZ(${
              props.goodQuality >= 50 ? 0 : (50 + props.goodQuality) * -3.6
            }deg)`}}></span>
          </div>
        </div>
        <p className="pie-txt" data-text="agree">
          <span className="pie-span">Good quality</span>
        </p>
      </div>
    </div>
  </div>
      )
  }
export default Histogram;