import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="//movies/:movieId" element={<MovieDetails />} />
        <Route path="//movies/:movieId/cast" element={<Cast />} />
        <Route path="//movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
export default App;