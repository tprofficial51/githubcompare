import React,{ Component} from 'react';
import {connect} from 'react-redux';
import {selectSong,deleteSong} from '../actions'

class SongList extends Component{
    renderList(){
        if(this.props.songs.length){
            return this.props.songs.map((song)=>{
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}>
                                Select
                            </button>
                            <button 
                            className="ui button danger"
                            onClick={()=>this.props.deleteSong(song)}>
                                Delete
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>  
                );
            });    
        }else{
            return (
                <div></div>
            );
        }
    }
    
    render(){
        // console.log(this.props.songs)
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );    
    }
}

const mapStateToProps=(state)=>{
    return {songs:state.songs};
}

export default connect(mapStateToProps,{selectSong,deleteSong})(SongList);

//connect()()
// function connect(){
//     return function(){
//         return "hi there!!";
//     }
// }
// returns "hi there!!"