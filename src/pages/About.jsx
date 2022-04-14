import Card from "../Card";
import {Link} from 'react-router-dom'


const About = () => {
    return (

        <Card>
        
        <div className="about">

            <h1> About This Project</h1>
            <p>This is reacct app to leave feedback for product or services</p>
            <p>Version 1.0</p>   
            <Link to='/'> Back To Home</Link>

        </div>
        </Card>
        );

        
}
 
export default About;