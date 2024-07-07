import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from '../Api';
import { Author, Content, Item } from './Reviews.styled';

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
        {!reviews[0] ? (
          <Content>We don't have any reviews for this movie.</Content>
        ) : (
          ''
        )}
        {reviews.map(e => {
          return (
            <Item key={e.id}>
              <Author>Author: {e.author}</Author>
              <Content>{e.content}</Content>
            </Item>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
