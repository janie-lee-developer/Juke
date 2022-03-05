import React from 'react';
import Sidebar from './Components/Sidebar';
import Albums from './Components/Albums';
import Player from './Components/Player';
import axios from 'axios';
import SingleAlbum from './Components/SingleAlbum';

// const albums = [
//   {
//     "id": 1,
//     "name": "No Dummy",
//     "artworkUrl": "default-album.jpg",
//     "artistId": 1,
//     "artist": {
//       "id": 1,
//       "name": "The Crash Test Dummies"
//     }
//   },
//   {
//     "id": 2,
//     "name": "I React to State",
//     "artworkUrl": "default-album.jpg",
//     "artistId": 1,
//     "artist": {
//       "id": 1,
//       "name": "The Crash Test Dummies"
//     }
//   }
// ];

const audio = document.createElement('audio');

export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      albums: [],
      selectedAlbum : {},
      currentSong: {},
      paused: false,
      dupSelectedAlbum : {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.forward = this.forward.bind(this);
    this.next = this.next.bind(this);
  }

  async componentDidMount(){
    const response = (await axios.get('/api/albums')).data;
    this.setState({ albums: response });
    audio.addEventListener('ended', ()=> {
      this.next();
    })
  }

  async selectAlbum(albumId){
    const response = (await axios.get(`/api/albums/${ albumId }`)).data;
    const [data] = response;
    this.setState( { selectedAlbum : data })
    // console.log(typeof {...response})
  }

  reset(){
    this.setState( {dupSelectedAlbum : this.state.selectedAlbum });
    this.setState( { selectedAlbum : {} })
  }

  start(song){
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
    this.setState({ currentSong : song})
    this.setState({ paused: false });
  }

  pause(){
    audio.pause();
    this.setState({ paused : true });
  }

  forward(){
    
    const { currentSong, selectedAlbum, dupSelectedAlbum } = this.state;
    let index;
    if (!selectedAlbum.id){
      dupSelectedAlbum.songs.map((song, i) => { if (song.id === currentSong.id) index = i });
      index === 0 ? index = dupSelectedAlbum.songs.length - 1 : index -= 1;
      this.start(dupSelectedAlbum.songs[index]);
    } else {
      selectedAlbum.songs.map((song, i) => { if (song.id === currentSong.id) index = i });
      index === 0 ? index = selectedAlbum.songs.length - 1 : index -= 1;
      this.start(selectedAlbum.songs[index]);
    }
    
  }

  next(){
    const { currentSong, selectedAlbum, dupSelectedAlbum } = this.state;
    let index;
    if (!selectedAlbum.id) {
      dupSelectedAlbum.songs.map((song, i) => { if (song.id === currentSong.id) index = i });
      index === dupSelectedAlbum.songs.length - 1 ? index = 0 : index += 1;
      this.start(dupSelectedAlbum.songs[index]);
    } else {
      selectedAlbum.songs.map((song, i) => { if (song.id === currentSong.id) index = i });
      index === selectedAlbum.songs.length - 1 ? index = 0 : index += 1;
      this.start(selectedAlbum.songs[index]);
    }
    
  }

  render () {
    const { albums, selectedAlbum, currentSong, paused } = this.state;

    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        <Sidebar reset = {this.reset} />
        <div className='container'>
          {
            ( Object.keys(selectedAlbum).length ) === 0 ?
              <Albums albums={albums} selectAlbum={this.selectAlbum} />
              : <SingleAlbum album={selectedAlbum} selectAlbum={this.selectAlbum} start = {this.start} currentSong={ currentSong }/>
          }
          
        </div>
        {currentSong.id ? <Player currentSong= {currentSong} pause={ this.pause } start = { this.start } paused={ paused } forward={this.forward} next={this.next}/> : <i/>}
        
      </div>
    )
  }
}

