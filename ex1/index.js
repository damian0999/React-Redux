import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component{
  render(){
    return(
      <div>
        Simple Example
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
