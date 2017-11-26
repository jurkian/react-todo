import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearchFilter } from '../actions';

class SearchBox extends Component {
   render() {
      return (
         <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input type="text" placeholder="Search..." ref="searchText" />
            <input type="submit" value="Search"/>
         </form>
      );
   }

   handleFormSubmit(e) {
      e.preventDefault();

      const searchText = this.refs.searchText.value;
      this.props.changeSearchFilter(searchText);
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      changeSearchFilter: (filter) => {
         dispatch(changeSearchFilter(filter));
      }
   }
};

const SearchBoxContainer = connect(
   null,
   mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;