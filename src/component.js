import React from 'react';

function Component (props) {
    return ( 
        <div> 
            <h1 >This is inside component 1 </h1>
            <h2>  {props.text}</h2>
            {props.children}
        </div>
        
     );
}

export default Component ;