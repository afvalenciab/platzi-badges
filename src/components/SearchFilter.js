import React from 'react';
import './styles/SearchFilter.css';

function SearchFilter(props) {
  return (
    <div className="Search-container">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Filter Badge"
          value={props.filterBadge}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default SearchFilter;
