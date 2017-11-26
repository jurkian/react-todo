import React from 'react';

const Link = ({ filter, currentFilter, changeVisibilityFilter, children }) => (
   (filter === currentFilter) ? (
      <span>{children}</span>
   ) : (
      <a href="#" onClick={() => changeVisibilityFilter(filter)}>{children}</a>
   )
);

export default Link;