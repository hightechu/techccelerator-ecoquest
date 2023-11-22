import React from 'react';
import foodpileimg from '../images/foodpile.jpg';
import foodbinimg from '../images/foodbin.png';

 const About = () => {

  return (
    <div className="container-fluid">        


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={foodpileimg} class="d-block w-75 imgsize" alt=" fool pile image"/>
            <div class="carousel-caption">
              <h5 class="display-4 text-white text-center">Did you know</h5>
              <p>1/3 of all food in the world are wasted each year</p>
            </div>
            </div>
            <div class="carousel-item active">
            <img src={foodbinimg} class="d-block w-75 imgsize" alt=" fool bin image"/>
            <div class="carousel-caption">
              <h5 class="display-4 text-white text-center">Did you know</h5>
              <p>1/3 of all food in the world are wasted each year</p>
            </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

    </div>
  )

}
 
export default About