import {createContext,useState} from 'react'

const FeedbackContext=createContext()

export const Feedbackprovider=({children})=>{

    const [Feedback,setFeedback]=useState([
        {
            id:1,
            text:'THis is from context',
            rating:9
        }
    ])

    return <FeedbackContext.Provider value={{

        Feedback:Feedback,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext