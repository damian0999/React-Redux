import React from 'react';
import {connect} from 'react-redux';
import {getRandomImage} from '../redux/action/index.js';

class RandomImages extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {images:{loading, data}, onRandomImages} = this.props;
    return(
      <div>
        <button type='button' onClick={onRandomImages}>Random Images</button>
        Status: <span style={{color: 'blue'}}>{loading}</span>
      <ImageList images={data}/>
      </div>
    );
  }
}

function ImageList(props){
  return(
    <div>
      {props.images.map((image) => <img key={image.id} src={image.link} style={{height: '200px'}}/>)}
    </div>
  );
}

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
