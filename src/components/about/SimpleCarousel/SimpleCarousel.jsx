import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "./data.json";
import css from "./SimpleCarousel.module.css";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div className={css.wrap} key={slide.id}>
          <img
            className={css.img}
            src={slide.image}
            alt={slide.alt}
            width={200}
            height={200}
          />
          <h3 style={{ textAlign: "center", marginTop: "10px" }}>
            {slide.alt}
          </h3>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {slide.caption}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleCarousel;
