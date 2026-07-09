import bannerImage from "../assets/greencity.jpg";
import "./BannerImage.css";

function BannerImage() {
  return (
    <section className="banner-image">
      <img src={bannerImage} alt="Banner" />
    </section>
  );
}

export default BannerImage;