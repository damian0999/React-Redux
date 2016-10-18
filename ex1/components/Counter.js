import React from 'react';
import {connect} from 'react-redux';
import {decrement} from '../redux/action/index.js';

class Counter extends React.Component{
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

const mapStateToProps = (state, ownProps) =>({
  count: state.count
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onDecrement: () => dispatch(decrement())
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
