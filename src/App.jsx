import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import Featurecity from "./components/Featurecity";
import Find from "./components/Find";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hows from "./components/Hows";
import Testimonial from "./components/Testimonial";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>

      <section id="home">
        <Hero />
      </section>

      <section id="destinations">
        <Featurecity />
      </section>

      <Banner />

      <BannerImage />

      <Testimonial />

      <section id="about">
        <Hows />
      </section>

      <section id="trips">
        <Find />
      </section>

      <BannerImage />

      <section id="contact">
        <Footer />
      </section>

      {showTop && (
        <button
          className="scroll-top"
          onClick={scrollToTop}
        >
          <FiArrowUp />
        </button>
      )}

    </div>
  );
}

export default App;