
import React from 'react';
import { Outlet, Link } from "react-router-dom";
  const shoot = () => {
    <Link to="/UserHome">Userhome</Link>
    
  }
 const GameOverScreen = () => {

  return (
    

    <div className="container-fluid title">     
   
        <div className="GO"></div>
        <p>Game Over!</p>  
        <button><Link to="/">Restart</Link></button> 
    </div>

    
  )




} 








export default GameOverScreen