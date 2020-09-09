import { combineReducers } from 'redux';

let userList=[];

const addUsersReducer=(users=userList,action)=>{
    if(action.type==='ADD_USER_TO_LIST'){
        return [...users,action.payload];
    }else if(action.type==='DELETE_USER_FROM_LIST'){
        return users.filter(user=>user.login!==action.payload.login);
    }
    return users;
}

const selectedUserReducer=(selectedSong=null,action)=>{
    if(action.type==='USER_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    users:addUsersReducer,
    selectedUser:selectedUserReducer
});