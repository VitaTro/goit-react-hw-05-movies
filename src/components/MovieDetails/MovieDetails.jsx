import { fetchDetailsMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const showFetchedDetailsMovie = async id => {
    try {
      const fetchedDetailsMovie = await fetchDetailsMovie(id);
      setMovie(fetchedDetailsMovie);
    } catch (error) {
      console.log(error);
    }
  };

  const { movieId } = useParams();

  useEffect(() => {
    showFetchedDetailsMovie(movieId);
  }, [movieId]);

  return (
    <div>
      {movie.length > 0 ? (
        <>
          <ul>
            <li>
              <Link to="actors">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
