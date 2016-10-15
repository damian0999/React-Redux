import React from 'react';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        Clicked: <span>{this.props.count.result}</span>
      <button type='button' onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}
