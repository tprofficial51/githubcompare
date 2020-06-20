import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import AddSong from './AddSong';

const App=()=>{
    return (
      <div className="ui container grid" style={{marginTop:'50px'}}>
        <div className="ui row">
          <div className="column five wide">
            <SongList />
          </div>
          <div className="column four wide">
            <SongDetail />
          </div>
          <div className="column five wide">
            <AddSong />
          </div>
        </div>
      </div>  
    ); 
};

export default App;