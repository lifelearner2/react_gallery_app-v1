import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {
    return(
        <div className='photo-container'>
                <ul>
                {props.loading ? <>Loading...</> : props.photos.map(photo => <Photo photo={photo} key={photo.id} /> )}
                </ul>
        </div>
    );
}

export default PhotoContainer;