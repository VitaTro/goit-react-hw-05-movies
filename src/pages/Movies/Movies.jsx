import { fetchSearchQuery } from 'components/Api';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const { query: actualQuery } = searchParams;

  const showFetchedMovies = async query => {
    setLoading(true);
    try {
      const fetchedMovies = await fetchSearchQuery(query);
      setMovies([...fetchedMovies]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    if (actualQuery) {
      showFetchedMovies(actualQuery);
    }
  }, [actualQuery]);
  return (
    <>
      <SearchBar onSubmit={e => setSearchParams({ query: e })} />
      {loading && <Loader />}
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={`${movie.id}`}
                  state={{ from: `/movies/?${searchParams}` }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        actualQuery && !loading && <div>Nothing found. Try again</div>
      )}
    </>
  );
};

export default Movies;
