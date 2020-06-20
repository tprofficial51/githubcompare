import { combineReducers } from 'redux';

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

let songList=[{title:'Bantai',duration:'3:30'}]

const addSongsReducer=(songs=songList,action)=>{
    if(action.type==='ADD_SONG'){
        return [...songs,action.payload];
    }else if(action.type==='DEL_SONG'){
        return songs.filter(song=>song.title!==action.payload.title);
    }
    return songs;
}

export default combineReducers({
    songs:addSongsReducer,
    selectedSong:selectedSongReducer
});