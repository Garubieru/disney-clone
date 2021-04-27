import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";

import ImgSlider from "../../components/ImgSlider";
import Viewers from "../../components/Viewers";
import Movies from "../../components/Movies";
import { selectUserName } from "../../features/user/userSlice";
import { setMovies } from "../../features/movie/movieSlice";

import db from "../../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommended = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const database = db.collection("movies");

    database.onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommended = [...recommended, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
        return null;
      });
      dispatch(
        setMovies({
          recommended,
          newDisney,
          originals,
          trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies sectionName="Recommended for you" type="recommended" />
      <Movies sectionName="New to Disney+" type="newDisney" />
      <Movies sectionName="Originals" type="originals" />
      <Movies sectionName="Trending" type="trending" />
    </Container>
  );
};

export default Home;
