import { fetchTrendingMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Image, Item, List, Title } from './Home.styled';
const Home = () => {
  const [trending, setTrending] = useState([]);
  const defaultImg =
    'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg';
  const seeTrending = async () => {
    try {
      const fetchedMovies = await fetchTrendingMovies();
      setTrending(fetchedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    seeTrending();
  }, []);
  return (
    <>
      <section>
        <Title>Trending today</Title>
        <List>
          {trending &&
            trending.length > 0 &&
            trending.map(movie => (
              <Item key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                  />

                  <Container>{movie.title}</Container>
                </Link>
              </Item>
            ))}
        </List>
      </section>
    </>
  );
};

export default Home;
