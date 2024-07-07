import PropTypes from 'prop-types';

import { Button, Form, Input } from './SearchBar.styled';
const SearchBar = props => {
  const handleSubmit = e => {
    e.preventDefault();
    //   const form = e.currentTarget;
    const query = e.target.query.value;
    props.onSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
