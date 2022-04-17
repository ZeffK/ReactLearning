import React from 'react'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'


const Feedbackstats = () => {

    const {Feedback}=useContext(FeedbackContext)

    let average= Feedback.reduce((acc,cur)=>{
        return acc+cur.rating
        

    },0 ) / Feedback.length //0 for acc initial value

    average=average.toFixed(1)



    return ( 
        <div className='container'>
            <div className="feedback-stats">
                <h4>{Feedback.length} Reviews</h4>
                <h4>Average Rating : {average}</h4>
                 </div>
        </div>

     );
}
 
export default Feedbackstats;