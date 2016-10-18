import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRandomImage} from '../redux/action/index.js';
import RandomImages from '../components/RandomImages.js';

const mapStateToProps = (state, ownProps) =>({
  images: state.images
});

const mapDispatchToProps = (dispatch, ownProps) =>{
  return{
    onRandomImages: () => dispatch(getRandomImage)
  }
}

const RandomImagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomImages)

export default RandomImagesContainer
