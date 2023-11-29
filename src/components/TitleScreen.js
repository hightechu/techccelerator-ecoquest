import React from 'react';
import EcoLogo from '../../src/images/EcoQuest.png'
 const About = () => {

  return (
    <div className="container-fluid title">
      <img src={EcoLogo} className="EcoLogo" alt='EcoLogo'/>
        <p>
          
        </p>
        <div className='buttontitle'>
          <button className='buttontitle'>Play</button>
          <button className='buttontitle'>Rules</button>
          <button className='buttontitle'>Credits</button>
        </div>
        
    </div>
  )

}
 
export default About