import "./Testimonial.css";

const testimonials = [
  {
    name: "Ahmed Ali",
    role: "Traveler",
    text: "Amazing experience. The destinations and service were unforgettable."
  },
  {
    name: "Sarah Khan",
    role: "Explorer",
    text: "Beautiful places, smooth booking, and incredible memories."
  },
  {
    name: "John Smith",
    role: "Photographer",
    text: "The best travel experience I have ever had."
  },
  {
    name: "Maria Lopez",
    role: "Adventurer",
    text: "Luxury, comfort, and amazing locations everywhere."
  },
  {
    name: "David Lee",
    role: "Designer",
    text: "A premium travel platform with stunning destinations."
  }
];


function Testimonial() {

  return (

    <section className="testimonial">

    

      <div className="testimonial-wrapper">

        <div className="testimonial-track">


          {[...testimonials, ...testimonials].map((item,index)=>(

            <div 
              className="testimonial-card"
              key={index}
            >

              <p>
                "{item.text}"
              </p>


              <h3>
                {item.name}
              </h3>


              <span>
                {item.role}
              </span>


            </div>

          ))}


        </div>

      </div>


    </section>

  );

}


export default Testimonial;