import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({song,songs})=>{
    // console.log(props);
    if(!songs.length){
        return <div>Please add a song!!</div>;
    }else{
        if(!song){
            return <div>Select a song!</div>;
        }
        else if(songs.filter(sonG=>sonG.title===song.title).length){
            return (
                <div>
                    <h3>Details for:</h3>
                    <p>
                        Title:{song.title}
                        <br/>
                        Duration:{song.duration}
                    </p>
                </div>
            );        
        } else{
            return ( 
                <div>
                    <h3>Details for:</h3>
                    <p>The selected song is now deleted!</p>
                </div>
            );
        }
    }
};

const mapStateToProps=(state)=>{
    return {song:state.selectedSong,songs:state.songs};
}

export default connect(mapStateToProps)(SongDetail);