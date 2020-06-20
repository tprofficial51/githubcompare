//Action Creator
export const selectSong=(song)=>{
    return {
        type:'SONG_SELECTED',
        payload:song
    };
};

export const addSong=(song)=>{
    return {
        type:'ADD_SONG',
        payload:song
    };
};

export const deleteSong=(song)=>{
    return {
        type:'DEL_SONG',
        payload:song
    };
};

