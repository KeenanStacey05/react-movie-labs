import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddToPlaylistIcon movie={movie} />
        </>
      )}
    />
  );
};

export default UpcomingMoviesPage;
