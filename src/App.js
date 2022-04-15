
import {v4 as uuidv4} from 'uuid'
import{BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import AboutIconLink from './AboutIconLink'
import FeedbackData from './data/data';
import './App.css';
import Component from './component'
import Component2 from './component2';
import FeedbackItem from './FeedbackItem';
import Header from './header';
import { useState } from 'react';
import Feedbacklist from './Feedbacklist';
import Feedbackstats from './FeedbackStats';
import FeedbackForm from './FeedbackForm'
import About from './pages/About';
import {Feedbackprovider} from './context/FeedbackContext'

function App() {

  const [Feedback,setFeedback]=useState(FeedbackData)

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
  
  return (

    <Feedbackprovider>

    <Router>
        
        <div className="App">
          
        <Routes> 

        
              
              <Route path='/' element={
                <>
                  
                  <FeedbackForm handleAdd={addFeedBack}/>
                  <Feedbackstats Feedback={Feedback}/>
                  <Feedbacklist Feedback={Feedback} handleDelete={deleteFeedback}/>
                </>
              }>


              </Route>
              
              

              <Route path='/about' element={<About/>} />
              
        </Routes>

        
        <Component text="this is wriiten in app.js passed to Component 1"></Component>
        <Component2/>
        <AboutIconLink />
        
       
      
        </div>

    </Router>

    </Feedbackprovider>
  );
}

export default App;
