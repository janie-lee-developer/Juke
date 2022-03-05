import React from 'react';

const Player = ({ currentSong, pause, start, paused, next, forward }) => {
    return (
        <div id='player-container'>
            <div id='player-controls'>
                <div className='row center'>
                    <i className='fa fa-step-backward' onClick={ ()=> forward()}></i>
                    { currentSong.id && !paused ?
                        <i className='fa fa-pause-circle' onClick= { () => pause() }></i>:
                        <i className='fa fa-play-circle' onClick={()=> start(currentSong)}></i>
                         
                    }
                    
                    <i className='fa fa-step-forward' onClick={()=> next()}></i>
                </div>
            </div>
        </div>
    )
}

export default Player;




