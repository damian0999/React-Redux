import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSum} from '../redux/action/index.js';
import Sum from '../components/Sum.js';

const mapStateToProps = (state, ownProps) =>({
  sum: state.sum
});

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
