import React from 'react';

class Sum extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      a: 0,
      b: 0
    }
    this.sum = this.sum.bind(this);
  }
  sum(){
    this.props.onSum(this.state.a, this.state.b);
  }
  render(){
    const {state: {a,b}, props: {sum}} = this;
    return(
      <div>
        <input type='text' value={a} onChange={(e) => this.setState({a: e.target.value})}/>
        + <input type='text' value={b} onChange={(e) => this.setState({b: e.target.value})}/>
      = <span>{sum}</span>
        <button type='button' onClick={this.sum}>Sum</button>
      </div>
    );
  }
}

export default Sum
