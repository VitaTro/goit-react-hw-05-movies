import NotFound from 'components/NotFound/NotFound';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
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
        <Route path="/movies" element={<Movies />}>
          <Route path="details" element={<MovieDetails />} />
          <Route path="actors" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* //ostatni wyświetli
        użytkownikowi stronę z wiadomością, że pod danym adresem nie znajduje
        się żadna część aplikacji */}
      </Routes>
    </div>
  );
};
export default App;
