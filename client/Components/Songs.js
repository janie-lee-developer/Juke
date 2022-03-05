import React from 'react';

const Songs = ({ songs, artist, start , currentSong}) => {
    return (
        <table id='songs'>
            <tbody>
                <tr className='gray'>
                    <td />
                    <td>#</td>
                    <td>Name</td>
                    <td>Artist</td> 
                    <td>Genre</td>
                </tr>
                {
                    songs.map( song => {
                        return <tr key={song.id} className={song.id === currentSong.id ? 'active' : ''}>
                            <td>
                            { 
                                song.id === currentSong.id ?
                                    <i />
                                    : <i onClick={() => start(song)} className='fa fa-play-circle' />
                            }
                            </td>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{ artist.name }</td>
                            <td>{ song.genre }</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Songs;