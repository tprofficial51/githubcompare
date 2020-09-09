import React from 'react';

import Heading from './Heading';
import Card from './Card';

function App(){
    //props
    return (
        <div style={{width:'30vw',float:'left'}}>
            <Heading title="Welcome to the React Webinar"  />
            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="React" style={{height:"50vh",width:"auto"}} />
            <Card name="Song1" title="title1" singer="One" />
            <Card name="Song2" title="title2" singer="Two"/>
        </div>
    )
}

export default App;