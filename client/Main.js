import React from 'react';
import Sidebar from './Components/Sidebar';
import Albums from './Components/Albums';
import Player from './Components/Player';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        <Sidebar />
        <div className='container'>
          <Albums />
        </div>
        <Player />
      </div>
    )
  }
}