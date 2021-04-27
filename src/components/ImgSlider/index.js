/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, ImageContainer } from "./styles";
import sliderData from "./sliderData";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings} styles={{ marginTop: "1.2rem" }}>
      {sliderData.map((image) => (
        <ImageContainer key={image.alt}>
          <a href={image.href}>
            <img src={`images/${image.src}`} alt={image.alt} />
          </a>
        </ImageContainer>
      ))}
    </Carousel>
  );
};

export default ImgSlider;
