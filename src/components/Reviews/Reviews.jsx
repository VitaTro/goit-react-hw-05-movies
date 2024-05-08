import { fetchReviewsMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState();

  const showFetchReviewsMovie = async id => {
    const fetchedReviewMovie = await fetchReviewsMovie(id);
    setReviews(fetchedReviewMovie);
  };
  const { movieId } = useParams();

  useEffect(() => {
    showFetchReviewsMovie(movieId);
  }, [movieId]);

  if (reviews) {
    return (
      <ul>
        {!reviews[0] ? 'We dont have any reviews for this movie.' : ''}
        {reviews.map(e => {
          return (
            <li key={e.id}>
              <p>Author:{e.author}</p>
              <p>{e.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
