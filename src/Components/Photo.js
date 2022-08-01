import React from 'react';

const Photo = ({photo}) => {
    const url = `https://live.staticflickr.com/${photo.server}/${photo.farm}/${photo.id}_${photo.secret}.jpg`;

    return(
        <li>
            <img src={url} alt=""/>
        </li>
    );
}

export default Photo;