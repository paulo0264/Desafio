import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {
  Container,
  MovieList,
  MovieItem,
} from './styles';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: 'SUA_API_KEY',
              language: 'en-US',
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>Catálogo de Filmes</h1>
      <MovieList>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <MovieItem>{movie.title}</MovieItem>
          </Link>
        ))}
      </MovieList>
    </Container>
  );
};

export default Home;
