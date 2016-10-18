import React from 'react';
import {connect} from 'react-redux';
import {getSum} from '../redux/action/index.js';

class Sum extends React.Component{
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

const mapStateToProps = (state, ownProps) =>{
  return{
    sum: state.sum
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return{
    onSum: (a,b) => dispatch(getSum(a,b))
  }
}

const SumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sum)

export default SumContainer
