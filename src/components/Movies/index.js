import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { Container, Content, Item } from "./styles";

import {
  selectNewDisney,
  selectOriginals,
  selectRecommended,
  selectTrending,
} from "../../features/movie/movieSlice";

const selectTypes = {
  recommended: selectRecommended,
  newDisney: selectNewDisney,
  originals: selectOriginals,
  trending: selectTrending,
};

const Movies = ({ sectionName, type }) => {
  const movies = useSelector(get(selectTypes, type, []));
  return (
    <Container>
      <h4>{sectionName}</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Item key={movie.title} to={`/details/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.type} />
            </Item>
          ))}
      </Content>
    </Container>
  );
};

Movies.propTypes = {
  sectionName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Movies;
