import React from 'react';
import { connect } from 'react-redux';
import { changeVisibilityFilter } from '../actions';
import Link from '../components/Link';

const FilterLinks = (props) => (
   <div>
      {'Show: '}
      <Link {...props} filter="SHOW_ALL">all</Link>
      {', '}
      <Link {...props} filter="SHOW_ACTIVE">active</Link>
      {', '}
      <Link {...props} filter="SHOW_COMPLETED">completed</Link>
   </div>
);

const mapStateToProps = (state) => {
   return {
      currentFilter: state.visibilityFilter
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeVisibilityFilter: (filter) => {
         dispatch(changeVisibilityFilter(filter));
      }
   }
};

const FilterLinksContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(FilterLinks);

export default FilterLinksContainer;