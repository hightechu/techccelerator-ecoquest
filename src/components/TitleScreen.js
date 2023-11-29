import React from 'react';
import { useNavigate } from "react-router-dom";
function DirectPage() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
}

 const About = () => {

  return (
    <div className="container-fluid title">
      <h2>Game</h2>    
       <h1>Name</h1>
        <p>
          
        </p>
        <div className='buttontitle'>
          <button onclick="location.href = 'www.google.com';"  id="submit-button myButton" className='buttontitle'>Play</button>
          <button className='buttontitle'>Rules</button>
          <button className='buttontitle'>Credits</button>
        </div>
        
    </div>
  )

}
 
export default About