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
        <Counter count={this.props.value.count}
          onDecrement={this.props.onDecrement}/>
        <hr/>
        <Sum sum={this.props.value.sum}
          onSum={this.props.onSum}/>
        <hr />
        <RandomImages images={this.props.value.images}
          onRandomImages={this.props.onRandomImages}/>
      </div>
    );
  }
}

export default Example;
