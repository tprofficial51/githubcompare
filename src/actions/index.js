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

export const addUserAction=(user)=>{
    return {
        type:'ADD_USER_TO_LIST',
        payload:user
    }
}

export const selectUser=(user)=>{
    return {
        type:'USER_SELECTED',
        payload:user
    };
}

export const deleteUser=(user)=>{
    return {
        type:'DELETE_USER_FROM_LIST',
        payload:user
    }
}