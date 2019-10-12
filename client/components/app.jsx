import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayId:''
    }
  }

render(){
  return(
    <div>
    <Review currentId={this.state.displayId}/>
    </div>
  )
}

}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

