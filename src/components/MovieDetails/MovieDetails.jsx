import { fetchDetailsMovie } from 'components/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  Button,
  Buttons,
  Description,
  DescriptionContainer,
  Image,
  Infos,
  Overview,
  Section,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  let location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const showFetchedDetailsMovie = async id => {
    try {
      const fetchedDetailsMovie = await fetchDetailsMovie(id);
      setMovie(fetchedDetailsMovie);
    } catch (error) {
      console.log(error);
    }
  };

  const { movieId } = useParams();
  const defaultImg =
    'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg';
  useEffect(() => {
    showFetchedDetailsMovie(movieId);
  }, [movieId]);

  if (movie) {
    return (
      <>
        <Section>
          <Link to={backLinkHref}>
            <Button type="button">← GO BACK</Button>
          </Link>

          <DescriptionContainer>
            {movie && (
              <Infos>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
                <Description>
                  <Title>
                    {movie.title} ({movie.release_date.split('-')[0]})
                  </Title>
                  <p>{movie.genres.map(genre => genre.name).join(' | ')}</p>
                  <Overview>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                  </Overview>
                  <p>User Score: {movie.vote_average * 10}%</p>
                  <Buttons>
                    <div key="cast">
                      <Link to={`cast`}>Cast</Link>
                    </div>
                    <div key="reviews">
                      <Link to={`reviews`}>Reviews</Link>
                    </div>
                  </Buttons>
                </Description>
              </Infos>
            )}
          </DescriptionContainer>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Section>
      </>
    );
  }
};
export default MovieDetails;
