import React from 'react';

class RandomImages extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <button type='button' onClick={this.props.onRandomImages}>Random Images</button>
        Status: <span style={{color: 'blue'}}>{this.props.images.loading}</span>
      <ImageList images={this.props.images.data}/>
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
