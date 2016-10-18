import React from 'react';

export default class Sum extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      a: 0,
      b: 0
    }
  }
  render(){
    const {state: {a,b}, props: {sum, onSum}} = this;
    return(
      <div>
        <input type='text' value={a} onChange={(e) => this.setState({a: e.target.value})}/>
        + <input type='text' value={b} onChange={(e) => this.setState({b: e.target.value})}/>
      = <span>{sum}</span>
        <button type='button' onClick={() => onSum(a,b)}>Sum</button>
      </div>
    );
  }
}
