import styled from "styled-components";

import Slider from "react-slick";
import { colors, styles } from "../../config/theme";

export const Carousel = styled(Slider)`
  margin-top: 1.2rem;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s;
    }
  }

  ul li button {
    &:before {
      font-size: 2rem;
      color: ${colors.colorGray};
    }
  }

  li.slick-active button:before {
    color: ${colors.colorWhite};
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;

  a {
    display: block;
    position: relative;
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
    border: 3px solid transparent;

    padding: 0.8rem;
    &:hover {
      border-color: white;
      transform: scale(1.01);
    }

    img {
      width: 100%;
      height: 100%;
    }
    transition: 0.3s;
  }
`;
