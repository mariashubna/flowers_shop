import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "./data.json";

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
        <div key={slide.id}>
          <img src={css.image} alt={slide.alt} width={200} />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {slide.caption}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleCarousel;
