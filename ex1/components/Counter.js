import React from 'react';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {count:{result}, onDecrement} = this.props;
    return(
      <div>
        Clicked: <span>{result}</span>
      <button type='button' onClick={onDecrement}>Decrement</button>
      </div>
    );
  }
}
