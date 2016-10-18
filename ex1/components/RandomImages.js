import React from 'react';

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

export default RandomImages;
