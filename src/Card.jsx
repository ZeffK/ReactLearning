import React from 'react'

const Card = ({children}) => {
    return ( 
        <div className='container'>
             <div className="card">

                {children}            

            </div>


        </div>
     );
}
 
export default Card;
