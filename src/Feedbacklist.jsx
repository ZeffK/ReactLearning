import React from 'react';
import FeedbackItem from './FeedbackItem';

const Feedbacklist = ({Feedback,handleDelete}) => {

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