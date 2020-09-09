import React from 'react';

function Card(props){
    return (
        <div style={{background:'orange',border:'1px solid black',padding:'10px'}}>
            <h1>{props.name}</h1>
            <h4>{props.title}</h4>
            <h5>{props.singer}</h5>
        </div>
    )
}

export default Card;