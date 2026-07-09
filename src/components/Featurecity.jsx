import cityMain from "../assets/animecity.png";
import city1 from "../assets/portgal.jpg";
import city2 from "../assets/istanbol.png";
import city3 from "../assets/img2.webp";
import city4 from "../assets/greencity.jpg";
import cityImage from "../assets/train.png";

import { FiArrowRight } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import "./Featurecity.css";


function Featurecity() {
  return (
    <>
      <section className="feature-city">

        <div className="feature-layout">


          <div className="feature-city-long image-card">

            <img src={cityMain} alt="Featured city" />

            <button className="city-arrow">
              <FiArrowRight />
            </button>

          </div>



          <div className="image-grid">


            <div className="image-grid-item image-card">

              <img src={city1} alt="City 1" />

              <button className="city-arrow">
                <FiArrowRight />
              </button>

            </div>



            <div className="image-grid-item image-card">

              <img src={city2} alt="City 2" />

              <button className="city-arrow">
                <FiArrowRight />
              </button>

            </div>




            <div className="image-grid-item image-card">

              <img src={city3} alt="City 3" />

              <button className="city-arrow">
                <FiArrowRight />
              </button>

            </div>




            <div className="image-grid-item image-card">

              <img src={city4} alt="City 4" />

              <button className="city-arrow">
                <FiArrowRight />
              </button>

            </div>


          </div>

        </div>

      </section>




      <section className="city-content">

        <div className="contentcity">


          <div className="city-text">

            <h1>
              Explore the World
            </h1>


            <p>
              Discover amazing destinations and create unforgettable memories.
            </p>


<ul>

  <li>
    <FiMapPin />
    Paris, France
  </li>

  <li>
    <FiMapPin />
    Tokyo, Japan
  </li>

  <li>
    <FiMapPin />
    New York City, USA
  </li>

</ul>


          </div>




          <div className="city-content-image">

            <img 
              src={cityImage}
              alt="Beautiful city destination"
            />

          </div>


        </div>

      </section>

    </>
  );
}


export default Featurecity;