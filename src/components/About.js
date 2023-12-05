import React from 'react';
import foodpileimg from '../images/foodbin.png';
import foodbinimg from '../images/starve.jpg';
import throwing from '../images/throwfood.jpg';

 const About = () => {

  return (
    <div className="container-fluid">        


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={foodpileimg} class="d-block w-75 imgsize" alt=" fool pile"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="display-4 text-white text-center">Did you know</h5>
              <p class="psizes">1/3 of all food in the world are wasted each year, which is over 1.3 billion tons. The wastes end up in the landfill and produce greenhouse gas emissions, leading to global warming.</p>
            </div>
            </div>
            <div class="carousel-item active">
            <img src={foodbinimg} class="d-block w-75 imgsize" alt=" fool bin"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="display-4 text-white text-center">Did you know</h5>
              <p class="psizes">By sorting waste into the right bins, you can help reduce greenhouse gas problems. Sorting organic waste can benefit as a nutrient for soil and fertilizing, along with finding the right way to get rid of the specifit type of waste.</p>
            </div>
            </div>
            <div class="carousel-item active">
            <img src={throwing} class="d-block w-75 imgsize" alt="children"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="display-4 text-white text-center">Did you know</h5>
              <p class="psizes">Despite the outrageous amount of food waste, over 800 million people are undernourished. We have enough food to feed everyone, but we cannot distribute it equally.</p>
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