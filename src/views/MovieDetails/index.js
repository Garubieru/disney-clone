import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay, FaPlus, FaUserFriends } from "react-icons/fa";
import db from "../../firebase";

import {
  BgImage,
  Container,
  TitleImage,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
  ContentMeta,
} from "./styles";

const MovieDetails = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({
    backgroundImg: "",
    cardImg: "",
    description: "",
    subTitle: "",
    title: "",
    titleImg: "",
    type: "",
  });

  useEffect(async () => {
    const movieDoc = await db.collection("movies").doc(id).get();
    if (movieDoc.exists) {
      return setMovieDetails(movieDoc.data());
    }
    console.log("Could not get data.");
    return null;
  }, [id]);
  return (
    <Container>
      <BgImage>
        <img src={movieDetails.backgroundImg} alt="background" />
      </BgImage>

      <TitleImage>
        <img src={movieDetails.titleImg} alt="" />
      </TitleImage>

      <ContentMeta>
        <Controls>
          <Player>
            <FaPlay />
            <span>Play</span>
          </Player>
          <Trailer>
            <FaPlay />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <FaPlus />
          </AddList>
          <GroupWatch>
            <FaUserFriends />
          </GroupWatch>
        </Controls>

        <SubTitle>{movieDetails.subTitle}</SubTitle>
        <Description>{movieDetails.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default MovieDetails;
