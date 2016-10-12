import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      sum: 0,
      a: 0,
      b: 0
    }
    this.decrese = this.decrese.bind(this);
    this.sum = this.sum.bind(this);
  }
  decrese(){
    this.setState({
      count: this.state.count - 1
    });
  }
  sum(){
    this.setState({
      sum: parseInt(this.state.a) + parseInt(this.state.b)
    });
  }
  render(){
    return(
      <div>
        <h1 style={{color: 'red'}}>React</h1>
        Clicked: <span>{this.state.count}</span>
      <button type='button' onClick={this.decrese}>Decrement</button>
        <hr/>
        <input type='text' value={this.state.a} onChange={(e) => this.setState({a: e.target.value})}/>
        + <input type='text' value={this.state.b} onChange={(e) => this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button type='button' onClick={this.sum}>Sum</button>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
