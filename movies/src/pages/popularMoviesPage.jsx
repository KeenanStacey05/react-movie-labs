import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddtoPlaylistIcon from "../components/cardIcons/addToPlaylist";
const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Popular Movies"
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

export default PopularMoviesPage;
