import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext=createContext()

export const Feedbackprovider=({children})=>{

    const [Feedback,setFeedback]=useState([
        {
            id:1,
            text:'THis is from context 1 ',
            rating:8
        },

        {    id:2,
            text:'THis is from context 2',
            rating:7

        },

        {   id:3,
            text:'THis is from context 3',
            rating:9

        }
            
    ])

    const deleteFeedback =(id) =>{
        if(window.confirm('are you sure'))
        {
          setFeedback(Feedback.filter((item) => item.id !== id) )
        }
        
    
      }

    const addFeedBack=(newFeedback)=>{
        console.log(newFeedback)
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...Feedback])
      }
    

    return <FeedbackContext.Provider value={{

        Feedback:Feedback,
        deleteFeedback:deleteFeedback,
        addFeedBack:addFeedBack

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext