import "./Find.css";

import trip1 from "../assets/animecity.png";
import trip2 from "../assets/brazil.png";
import trip3 from "../assets/brazilpoor.png";
import trip4 from "../assets/switzland.png";
import trip5 from "../assets/turkish.png";
import trip6 from "../assets/oldcity.png";
import trip7 from "../assets/ocean.png";
import trip8 from "../assets/train.png";

import { FiMapPin, FiArrowRight } from "react-icons/fi";

function Find() {
  const trips = [
    {
      image: trip1,
      title: "Tokyo Dreams",
      location: "Tokyo, Japan",
      price: "$299",
    },
    {
      image: trip2,
      title: "Brazil Escape",
      location: "Rio de Janeiro, Brazil",
      price: "$399",
    },
    {
      image: trip3,
      title: "Amazon Adventure",
      location: "Manaus, Brazil",
      price: "$459",
    },
    {
      image: trip4,
      title: "Swiss Alps",
      location: "Zurich, Switzerland",
      price: "$699",
    },
    {
      image: trip5,
      title: "Turkish Delight",
      location: "Istanbul, Turkey",
      price: "$499",
    },
    {
      image: trip6,
      title: "Ancient Streets",
      location: "Rome, Italy",
      price: "$349",
    },
    {
      image: trip7,
      title: "Ocean Paradise",
      location: "Maldives",
      price: "$799",
    },
    {
      image: trip8,
      title: "Historic Journey",
      location: "Prague, Czech Republic",
      price: "$379",
    },
  ];

  return (
    <section className="find">

      <div className="contentfind">
        <h2>Find Your Perfect Trip</h2>

        <p>
          Discover amazing places and create unforgettable memories
          with our travel experiences.
        </p>
      </div>

      <div className="containerbutton">
        <ul>
          <li>Destination</li>
          <li>Activity</li>
          <li>Trip</li>
        </ul>
      </div>

      <div className="imagecontainer">

        {trips.map((trip, index) => (
          <div className="imageitem" key={index}>

            <img
              src={trip.image}
              alt={trip.title}
            />

            <div className="imageoverlay">

              <span className="price">
                From {trip.price}
              </span>

              <div className="bottomcontent">

                <div className="tripinfo">
                  <h3>{trip.title}</h3>

                  <p>
                    <FiMapPin />
                    {trip.location}
                  </p>
                </div>

                <button className="tripbutton">
                  <FiArrowRight />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Find;