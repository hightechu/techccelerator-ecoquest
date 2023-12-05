import React, {useState} from 'react';
import qrCode from '../images/donate.png';

const SupportUs = () => {

    return (
      <div className="container-fluid bgcolor">
        <h1>Support us!</h1>
        <h2 className="info">To ensure food waste awareness for the future generation.</h2>
        <a href="/" className='donatelink'>Donate Now</a>
        <br></br>        <br></br>        <br></br>
        <p>Or scan this QR Code: </p>
        <img src={qrCode} alt=" qrcode" className="qrbox"/>
        <h2 className="info">Every dollar will help develop the website to be more interactive and engaging.</h2><br></br>
      </div>
      )
    }

export default SupportUs;