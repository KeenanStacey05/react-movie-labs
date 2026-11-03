import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddtoPlaylistIcon from "../components/cardIcons/addToPlaylist";

const NowPlayingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Now Playing Movies"
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

export default NowPlayingMoviesPage;
