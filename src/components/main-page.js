import React from "react";

import Header from "./Header/Header2";
import Footer from "./Footer/Footer";
import MoviesTabs from "./MoviesTabs/MoviesTabs";
import MoviesContainer from "./MoviesTabs/MoviesContainer";
import Genres from "./Genres";

import "./scss/style.scss";

// const addSomeMovies = (moviesContainer) => {
//   const movie = { id: 0, name: "Djungo-bar-scene Comedy", image: "https://www.youtube.com/embed/xRnUyVUJR_E?start=76" };
//   moviesContainer.addObject(movie);
// };

const getGenresContainer = () => {
  const genresContainer = {};

  for (let genre of Genres) {
    const moviesContainer = new MoviesContainer(genre);
    // addSomeMovies(moviesContainer);
    genresContainer[genre] = moviesContainer;
  }
  return genresContainer;
};
const GenresContainer = getGenresContainer();

const footerLinks = [
  { link: "https://www.youtube.com/watch?v=4vIMg4tTIrc", title: "View Deadpool wisdom" },
  { link: "mailto:eladr@gmail.com", title: "Need any help?" },
  { link: "https://www.facebook.com/elad.rapaport", title: "Say Hi on facebook" },
  { link: "https://sivadass.in", title: "Read My Blog" }
];

const MainPage = () => (
  <div class="sh-grid-container">
    <Header class="item1" genresContainer={GenresContainer} />
    <MoviesTabs
      class="item2"
      genresContainer={GenresContainer}
    />
    <Footer class="item3"
      footerLinks={footerLinks}
    />
  </div>
);

export default MainPage;
