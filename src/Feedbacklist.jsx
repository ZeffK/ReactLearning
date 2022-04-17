import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const Feedbacklist = ({handleDelete}) => {

    const {Feedback}=useContext(FeedbackContext)

    if(!Feedback || Feedback.length===0){
        return console.log(Feedback) 

    }
    return ( 
        <div className='feedback-list'>
            {Feedback.map((item) => (
                <FeedbackItem 
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                />
            ))}

        </div>
    
     );
}
 
export default Feedbacklist;