import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const FeedbackItem = ({item}) =>{

    const {deleteFeedback}=useContext(FeedbackContext)

  

    return ( 
        <div className='container'>
            <div className='card' >
                <div className="num-display"> {item.rating}</div>
                <button onClick={ ()=> deleteFeedback(item.id) } className='close'> 
                    <FaTimes color='purple'/>
                </button>
                <div className="text-display" > {item.text}</div>
            </div>
        </div>
     );
}
 
export default FeedbackItem
