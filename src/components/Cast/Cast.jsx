import { fetchCastMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Caption,
  Container,
  Details,
  Image,
  Table,
  Tbody,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState();
  const showFetchedCastMovies = async id => {
    const fetchedCastMovie = await fetchCastMovie(id);
    setCast(fetchedCastMovie);
  };
  const { movieId } = useParams();

  useEffect(() => {
    showFetchedCastMovies(movieId);
  }, [movieId]);

  if (cast) {
    return (
      <Container>
        <table>
          <Caption>Cast</Caption>
          <Tbody>
            {cast.map(e => (
              <Table key={e.id}>
                <tr>
                  <td>
                    <Image
                      src={
                        e.profile_path
                          ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`
                          : `https://via.placeholder.com/138x175?text=Theres+no+photo`
                      }
                      alt={e.name}
                    />
                  </td>
                  <td>
                    <Details>
                      <div>
                        <strong>Name:</strong> {e.name}
                      </div>
                      <div>
                        <strong>Character:</strong> {e.character}
                      </div>
                    </Details>
                  </td>
                </tr>
              </Table>
            ))}
          </Tbody>
        </table>
      </Container>
    );
  }
};

export default Cast;
