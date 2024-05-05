import PropTypes from 'prop-types';

const SearchBar = props => {
  const handleSubmit = e => {
    e.preventDefault();
    //   const form = e.currentTarget;
    const query = e.target.query.value;
    props.onSubmit(query);
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
