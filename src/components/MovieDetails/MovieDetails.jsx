import { fetchDetailsMovie } from 'components/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  let location = useLocation();
  const backLink = location.state?.from ?? '/';

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

  if (movie) {
    return (
      <>
        <div>
          <div>
            <Link to={backLink}>
              <button type="button">← GO BACK</button>
            </Link>
            <img
              src={
                movie.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                  : `https://via.placeholder.com/220x330?text=Theres+no+photo`
              }
              alt={`${movie.title}`}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <span>User score: {Math.round(movie.vote_average * 10)}%</span>
            <h3>Overview</h3>
            <p>{movie.overview ? movie.overview : "There's no overview"}</p>
            <h3>Generes</h3>
            <p>
              {movie.genres &&
                movie.genres.map(e => {
                  return `${e.name} `;
                })}
            </p>
          </div>
        </div>
        <div>
          Additional information:
          <ul>
            <li>
              <Link to="cast" state={{ from: `${backLink}` }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: `${backLink}` }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* можна використовувати його для визначення, як обробляти запасний вміст під час очікування асинхронних дій та для інкапсуляції будь-якої частини дерева компонентів */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </>
    );
  }
};

export default MovieDetails;
