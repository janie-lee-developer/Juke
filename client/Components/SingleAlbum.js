import React from 'react';
import Songs from './Songs';
import Album from './Album';

const SingleAlbum = ({ album, selectAlbum , start, currentSong}) => {
    return (
        <div id='single-album' className='column'>
            <Album album = { album } selectAlbum = {selectAlbum}/> 
            <Songs songs = {album.songs} artist = { album.artist} start={ start } currentSong = { currentSong } />
        </div>
    )
}

export default SingleAlbum;