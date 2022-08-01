//created one container for all photos so that I just render it once rather than indiv for all three types of photos

import React from 'react';
import Photo from './Photo';


const PhotoContainer = (props) => {
  let photos = props.data.map((photo) => {
    return <Photo type={photo.type}
                   img={photo.img_src}
                   key={photo.id} />
  }); 
  return (
    <div>
      <ul>
        {photos}    
      </ul>
    </div>
  );
}

export default PhotoContainer;