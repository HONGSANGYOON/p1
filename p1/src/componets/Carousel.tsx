import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://i.ytimg.com/vi/tPvcE107LeQ/maxresdefault.jpg"
          alt="Slide 1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_52683-79272.jpg"
          alt="Slide 2"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/students-are-reading-writing-searching-and-having-fun_540284-173.jpg"
          alt="Slide 3"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Slider>
  );
};

export default Carousel;
