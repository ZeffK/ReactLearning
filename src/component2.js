import React from 'react';
import Component from './component';

function Component2 (props) {
    return (    

        <div> 
        <h1> Below using prop childern</h1>
        <Component> <div> <p> Here using using prop children</p></div> </Component>
        </div>
    );
}

export default Component2 ;