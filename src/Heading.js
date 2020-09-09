import React from 'react';

// function Heading(props){
//     return (
//         <div style={{backgroundColor:'yellow',textAlign:'center'}}>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

class Heading extends React.Component{
    render(){
        return (
            <div style={{backgroundColor:'yellow',textAlign:'center'}}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Heading;