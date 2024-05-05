import { fetchCastMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState();
  const showFetchedCastMovies = async id => {
    const fetchedCastMovie = await fetchCastMovie(id);
    setCast(fetchedCastMovie);
  };
  const { movieId } = useParams();
  useEffect(() => {
    showFetchedCastMovies(movieId);
  }, []);
  if (cast) {
    return (
      <div>
        <ul>
          {cast.map(e => {
            return (
              <li key={e.id}>
                <img src={e.profile_path} alt={e.name} />
                <div>
                  <h3>Additional information</h3>
                  <p>Name:{e.name}</p>
                  <p>Character:{e.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Cast;
