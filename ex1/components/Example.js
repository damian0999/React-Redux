import React from 'react';
import Counter from '../containers/Counter.js'
import Sum from '../containers/Sum.js'
import RandomImages from '../containers/RandomImages.js'

class Example extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1 style={{color: 'red'}}>React</h1>
        <Counter />
        <hr/>
        <Sum />
        <hr />
        <RandomImages />
      </div>
    );
  }
}

export default Example;
