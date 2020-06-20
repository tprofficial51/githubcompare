import React from 'react';
import {connect} from 'react-redux';
import {addSong} from '../actions'

class AddSong extends React.Component{

    addsong=(e)=>{
        e.preventDefault();
        var title=document.querySelector('#name').value;
        var duration=document.querySelector('#duration').value;
        if(title.length && duration.length){
            // console.log(title,duration);
            var song={title,duration};
            // console.log(song);
            this.props.addSong(song); 
            document.querySelector('#name').value='';   
            document.querySelector('#duration').value='';
        }else{
            alert('Enter all the fields');
        }
    }

    render(){
        return (
            <div>
            <form onSubmit={this.addsong}>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>NAME:</label>
                            <input type="text" id="name" placeholder="song name" />
                        </div>
                        <div className="field">
                            <label>DURATION:</label>
                            <input type="text" id="duration" placeholder="song duration" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="ui button primary">ADD SONG</button>
            </form>
            </div>
        );    
    }
}

export default connect(null,{addSong})(AddSong);