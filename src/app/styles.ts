import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const MovieDetailsContainer = styled.div`
  margin-top: 20px;
`;

export const MovieDetails = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  margin-top: 10px;
`;