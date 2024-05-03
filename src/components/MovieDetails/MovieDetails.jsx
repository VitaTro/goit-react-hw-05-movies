import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="actors">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
