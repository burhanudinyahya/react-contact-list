import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const getInput = (event) => event.target.value;

const SearchBar = ({ filterText, onUserInput }) => (
  <div className="searchBar">
    <input
        placeholder="Search Contacts"
        value={ filterText }
        onChange={ event => onUserInput(getInput(event)) }
    />
  </div>
);

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

export default SearchBar;
