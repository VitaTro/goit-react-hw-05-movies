import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

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
        className={css.input}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
