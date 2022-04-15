import {createContext,useState} from 'react'

const FeedbackContext=createContext()

export const Feedbackprovider=({children})=>{

    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'THis is from context',
            rating:9
        }
    ])

    return <FeedbackContext.Provider value={{

        feedback:feedback,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext