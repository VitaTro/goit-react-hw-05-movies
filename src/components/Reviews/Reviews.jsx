import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from '../Api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState();

  const fetchThisMovieReviews = async id => {
    const fetchedData = await fetchReviewsMovie(id);
    setReviews(fetchedData);
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchThisMovieReviews(movieId);
  }, [movieId]);

  if (reviews) {
    return (
      <ul>
        {!reviews[0] ? 'We dont have any reviews for this movie.' : ''}
        {reviews.map(e => {
          return (
            <li key={e.id} className={css.item}>
              <p className={css.author}>Author: {e.author}</p>
              <p>{e.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
