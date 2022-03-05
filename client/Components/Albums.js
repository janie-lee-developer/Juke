import React from 'react';
import Album from './Album';

const Albums = ({ albums, selectAlbum }) => {
    return (
        <div id='albums' className='row wrap'>
            { albums.map( album => {
                return <Album key = { album.id } album = { album } selectAlbum = { selectAlbum }/>
            })}
        </div>
    )
}

export default Albums;