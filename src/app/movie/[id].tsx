import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  Container,
  MovieDetailsContainer,
  MovieDetails,
  MovieTitle,
  MovieOverview,
} from '../styles';

interface Movie {
  title: string;
  overview: string;
  release_date: string;
}

const MovieDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: 'SUA_API_KEY',
              language: 'en-US',
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <MovieDetailsContainer>
        <MovieDetails>
          <MovieTitle>{movie.title}</MovieTitle>
          <p>Data de Lançamento: {movie.release_date}</p>
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieDetails>
      </MovieDetailsContainer>
    </Container>
  );
};

export default MovieDetailsPage;