import React from 'react';
import Counter from './Counter.js'
import Sum from './Sum.js'
import RandomImages from './RandomImages.js'

class Example extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {value:{count, sum, images}, onDecrement, onSum, onRandomImages} = this.props;
    return(
      <div>
        <h1 style={{color: 'red'}}>React</h1>
        <Counter count={count}
          onDecrement={onDecrement}/>
        <hr/>
        <Sum sum={sum}
          onSum={onSum}/>
        <hr />
        <RandomImages images={images}
          onRandomImages={onRandomImages}/>
      </div>
    );
  }
}

export default Example;
