
import React from 'react';
import { Outlet, Link } from "react-router-dom";
  const shoot = () => {
    <Link to="/UserHome">Userhome</Link>
    
  }
 const GameOverScreen = () => {

  return (
    

    <div className="container-fluid">     
   
            <div className="GO!"></div>
        <p>Game Over!</p>  
        <button><Link to="/UserHome">Restart</Link></button> 
    </div>

    
  )




} 








export default GameOverScreen