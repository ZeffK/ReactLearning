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

    const [FeedbackEdit,SetFeedbackEdit]=useState(
        {
            item:{},
            edit:false
        }
        
    )

    const EditFeedback=(item)=>{
        SetFeedbackEdit({
            item,
            edit:true
        })
    }


    const deleteFeedback =(id) =>{
        if(window.confirm('are you sure'))
        {
          setFeedback(Feedback.filter((item) => item.id !== id) )
        }
        
    
      }

    const addFeedBack=(newFeedback)=>{
       // console.log(newFeedback)
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...Feedback])
      }

    const updateFeedback=(id,updItem)=>{


        setFeedback(
            Feedback.map( (item) => (
                (item.id===id ?  {...item,...updItem} : item) //iterating and comaring the existing value with seleted item
            ) )
        )
                
        SetFeedbackEdit({               ///for adding next item as new item
            edit:false
        })

        

    }
    

    return <FeedbackContext.Provider value={{

        Feedback:Feedback,
        deleteFeedback:deleteFeedback,
        addFeedBack:addFeedBack,
        EditFeedback:EditFeedback,
        FeedbackEdit:FeedbackEdit,
        updateFeedback:updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext