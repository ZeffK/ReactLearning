import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {

    const [text,setText]=useState('')
    const [btnDisabled,setbtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(10)
    const handleChange=(e)=>{

        if(text ==='' ){
            setbtnDisabled(true)
            setMessage(null)
        }

        else if(text !=='' && text.trim().length <=10){
            setbtnDisabled(true)
            setMessage("Enter atleast 10 charcter")
        }
        else{
            setMessage(null)
            setbtnDisabled(false)
        }

        setText(e.target.value)

    }

    const handleSubmit=(e)=>{

      e.preventDefault()
      
      if (text.trim().length > 10){
          const newFeedback={
              text:text,
              rating:rating 
          }

          console.log(newFeedback)
          handleAdd(newFeedback)
          setText('')
      }

    }


    return ( 
        
        <div>

           <Card> 
               <form onSubmit={handleSubmit}>

                    <h2>How would you rate your service with us </h2>
                     <RatingSelect select={(rating) => setRating(rating)}/> 

                    <div className="input-group">

                    <input placeholder='Write here' type='text' value={text} onChange={handleChange}/>
                    
                        <Button type='submit' version='secondary' isDisabled={btnDisabled} > Send</Button>
                         

                    

                    </div>

                   <div className="message"> {message}</div> 

                </form>
              

           </Card>

           </div>
               
               
                    
              

          


     );
}
 
export default FeedbackForm;