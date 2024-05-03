import PropTypes from 'prop-types';

const Movies = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;
    props.onSubmit({ query });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Movies;
