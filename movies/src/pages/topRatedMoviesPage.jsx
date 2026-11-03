import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const topRatedMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <AddtoPlaylistIcon movie={movie} />
          </>
        );
      }}
    />
  );
};

export default topRatedMoviesPage;
