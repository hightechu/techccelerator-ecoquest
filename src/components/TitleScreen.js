import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

 const About = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    // 👇️ navigate to /contacts
    navigate('/DndGameInside');
  };
  return (
    <div className="container-fluid title">
      <h2>Game</h2>    
       <h1>Name</h1>
        <p>
          
        </p>
        <div className='buttontitle'>

          <button onClick={navigateToGame}  id="submit-button myButton" className='buttontitle'>Play</button>

          <button type="button" className='buttontitle' data-bs-toggle="modal" data-bs-target="#exampleModal">Rules</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">RULES</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                      Store food in their correct conatiner and get as much points as you can!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <button className='buttontitle'>Leaderboard</button>
          <button type="button" className='buttontitle' data-bs-toggle="modal" data-bs-target="#CreditsModal">Credits</button>
          <div class="modal fade" id="CreditsModal" tabindex="-1" aria-labelledby="CreditsModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="CreditsModalLabel">CREDITS</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body dope">
                      Developers:
                      <ul>
                        <li>Mamon</li>
                        <li>Erick</li>
                        <li>Ali</li>
                      </ul>
                      Companies supporting this page:
                      <ul>
                        <li>Example company</li>
                      </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  )

}
 
export default About