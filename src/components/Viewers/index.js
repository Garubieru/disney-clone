/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

import { Wrapper, Item } from "./styles";
import viewersData from "./viewersData";

const Viewers = () => (
  <Wrapper>
    {viewersData.map((viewer) => (
      <Item key={viewer.desc}>
        <img src={`images/${viewer.src}`} alt={viewer.alt} />
        <video autoPlay loop playsInline src={`videos/${viewer.video}`}>
          <source type="video/mp4" src={`videos/${viewer.video}`} />
        </video>
      </Item>
    ))}
  </Wrapper>
);

export default Viewers;
