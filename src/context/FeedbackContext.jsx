import {createContext,useEffect,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext=createContext()

export const Feedbackprovider=({children})=>{

    const [Feedback,setFeedback]=useState([])

    useEffect(()=>{
        FetchFeedback()
        
    },[])

    const FetchFeedback=async()=>{
        const response=await fetch(`http://localhost:5000/Feedback?_sort=id&_order=desc`)
        const data=await response.json()
        setFeedback(data)
        console.log(data)
    }

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


    const deleteFeedback = async (id) =>{
        if(window.confirm('are you sure'))
        {
            await fetch(`http://localhost:5000/Feedback/${id}`,{
                method:'DELETE'
            })

            
              setFeedback(Feedback.filter((item) => item.id !== id) )
            
        }

      }

    const addFeedBack=async (newFeedback)=>{
        const response=await fetch(`http://localhost:5000/Feedback`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
       // console.log(newFeedback)
        const data=await response.json()
        //console.log(data)
        newFeedback.id=uuidv4()
        setFeedback([data,...Feedback])
      }

    const updateFeedback= async (id,updItem)=>{

        const response=await fetch(`http://localhost:5000/Feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updItem)
        })

        const data=await response.json()


        setFeedback(
            Feedback.map( (item) => (
                (item.id===id ?  {...item,...data} : item) //iterating and comaring the existing value with seleted item
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