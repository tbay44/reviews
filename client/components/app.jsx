import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx'
import Histogram from './Histogram.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayId:'',
      ratingBreakdown: []
    }
  }

render(){
  return(
    <div className="review-component">
    <div id="histogram">
    <Histogram ratingBreakdown={this.state.ratingBreakdown}/>
    </div>
    <div className="reviews-right">
      <div className="reviews-header">
        <h2 className="review-h2">Most relevant reviews</h2>
      </div>
      <Review currentId={this.state.displayId}/>
    </div>
    </div>
  )
}

}

export default App;

ReactDOM.render(<App />, document.getElementById('reviews'));

