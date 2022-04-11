import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    const headerStyles={
        color:'red'
    }

    
    return (

        <>
                       
            <div className='container' style={headerStyles}>

            <h2 >{props.text}</h2>


            </div>
        

        </>
     );
}

Header.defaultProps={
    text:"FeedBackUI"    
}

Header.prototype={
    text:PropTypes.string
}
 
export default Header;