import React from "react";
import { useParams } from 'react-router';
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import { getMovieRecommendations } from '../api/tmdb-api'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const MovieRecommendationsPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movieRecommendations', {id: id}],
    queryFn: getMovieRecommendations,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <PageTemplate
      title="Recommended Movies"
      movies={movie}
        action={(movie) => (
            <>
            <AddToFavoritesIcon movie={movie} />
            <AddToPlaylistIcon movie={movie} />
            </>
        )}
    />
  );
};

export default MovieRecommendationsPage;