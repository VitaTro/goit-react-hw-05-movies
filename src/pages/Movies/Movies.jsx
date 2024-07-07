import { fetchSearchQuery } from 'components/Api';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Container, Image, Item, List, Title } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const actualQuery = searchParams.get('query'); // тут треба було додати .get('query') і тоді з'явились фільми по пошуку
  const defaultImg =
    'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg';
  const showFetchedSearchMovies = async query => {
    setLoading(true);
    try {
      const fetchedSearchQuery = await fetchSearchQuery(query);
      setMovies([...fetchedSearchQuery]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    if (actualQuery) {
      showFetchedSearchMovies(actualQuery);
    }
  }, [actualQuery]);

  return (
    <Container>
      <SearchBar onSubmit={e => setSearchParams({ query: e })}></SearchBar>
      <Title>{movies.length > 0 ? 'Search result:' : null}</Title>
      {loading && <div>Loading...</div>}
      {movies.length > 0 ? (
        <List>
          {movies.map(movie => {
            return (
              <Item key={movie.id}>
                <Link
                  to={`${movie.id}`}
                  state={{ from: `/movies/?${searchParams}` }}
                >
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                  />
                  {movie.title}
                </Link>
              </Item>
            );
          })}
        </List>
      ) : (
        actualQuery && !loading && <div>Nothing found. Try again.</div>
      )}
    </Container>
  );
};

export default Movies;
