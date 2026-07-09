import "./Footer.css";

import { 
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiYoutube
} from "react-icons/fi";


function Footer(){

    return (

        <footer className="footer">


            <div className="footer-container">


                <div className="footer-brand">

                    <h2>
                        TravelX
                    </h2>

                    <p>
                        Discover the world with unforgettable journeys
                        and amazing experiences.
                    </p>

                </div>



                <div className="footer-links">

                    <h3>
                        Explore
                    </h3>

                    <a href="#">
                        Destinations
                    </a>

                    <a href="#">
                        Trips
                    </a>

                    <a href="#">
                        About Us
                    </a>

                    <a href="#">
                        Contact
                    </a>

                </div>



                <div className="footer-links">

                    <h3>
                        Support
                    </h3>

                    <a href="#">
                        Help Center
                    </a>

                    <a href="#">
                        Privacy Policy
                    </a>

                    <a href="#">
                        Terms
                    </a>

                </div>



                <div className="footer-social">

                    <h3>
                        Follow Us
                    </h3>


                    <div>

                        <FiInstagram />

                        <FiFacebook />

                        <FiTwitter />

                        <FiYoutube />

                    </div>


                </div>


            </div>



            <div className="footer-bottom">

                © 2026 TravelX. All rights reserved.

            </div>


        </footer>

    )

}


export default Footer;