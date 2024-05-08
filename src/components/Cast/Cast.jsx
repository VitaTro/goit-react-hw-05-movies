import { fetchCastMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const showFetchedCastMovies = async id => {
    const fetchedCastMovie = await fetchCastMovie(id);
    setCast(fetchedCastMovie);
  };
  // В компоненті, який відповідає за відображення цього маршруту, ви використовуєте хук useParams().
  // Хук повертає об’єкт, де ключі - це назви параметрів, визначених у маршруті, а значення - це їхні фактичні значення з URL.
  const { movieId } = useParams();

  useEffect(() => {
    showFetchedCastMovies(movieId);
  }, [movieId]);

  if (cast) {
    return (
      <div>
        <ul>
          {cast.map(e => {
            return (
              <li key={e.id}>
                <img
                  src={
                    e.profile_path
                      ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`
                      : `https://via.placeholder.com/138x175?text=Theres+no+photo`
                  }
                  alt={e.name}
                />

                <div>
                  <h3>Additional information</h3>
                  <p>Name: {e.name}</p>
                  <p>Character: {e.character}</p>
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
