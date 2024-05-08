import { lazy } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;

  &.active {
    color: orange;
    font-size: 30px;
  }
`;

const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies" end>
          Movies
        </StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* //ostatni wyświetli
        użytkownikowi stronę z wiadomością, że pod danym adresem nie znajduje
        się żadna część aplikacji */}
      </Routes>
    </div>
  );
};
export default App;
