import React from 'react';


const GameNav = () => {
    return (

        <div>

    {/* // Usage */}
    <h2 className='score'>Score: 1 pts</h2>

    <a href="/TitleScreen" >
        <button className='buttn'> Return to main page </button>
    </a>
     <span className='time'>Time left: 20s</span>
        </div>

        
    );
}
 
export default GameNav;


