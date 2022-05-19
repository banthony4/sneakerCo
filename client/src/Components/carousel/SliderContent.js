import React from "react";
import Arrows from "./Arrows";


function SliderContent({ activeIndex, sliderImage, setActiveIndex, len }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.url} alt={slide.title} />
        </div>
      ))}
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </section>
  );
}

export default SliderContent;