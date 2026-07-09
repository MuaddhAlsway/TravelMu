import React from "react";
import "./Hows.css";

import travel1 from "../assets/animecity.png";
import travel2 from "../assets/istanbol.png";
import travel3 from "../assets/train.png";
import plane from "../assets/greencity.jpg";

function Hows() {
  return (
    <section className="hows">

      <div className="title">

        <h2>
          Begin your life with new destinations
        </h2>

        <p>
          Discover amazing places and create unforgettable memories with our travel experiences.
        </p>

        <button>Explore More</button>
        <button>Learn More</button>

      </div>


      <div className="image">

        {/* Big Image */}
        <img src={travel1} alt="Travel Destination" />


        {/* Right Side */}
        <div className="image-side">

          <div className="medium-image">
            <img src={travel2} alt="Travel Destination" />
          </div>


          <div className="small-image">
            <img src={travel3} alt="Travel Destination" />
          </div>


          <div className="container">

            <div className="icon">
              <img src={plane} alt="Plane" />
            </div>

            <div className="text">
              <h3>Travel with ease</h3>

              <p>
                Our platform makes it easy to plan and book your dream vacation.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hows;