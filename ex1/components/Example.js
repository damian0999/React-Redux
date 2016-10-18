import React from 'react';
import Counter from './Counter.js'
import Sum from './Sum.js'
import RandomImages from './RandomImages.js'

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
