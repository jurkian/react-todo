import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
   render() {
      return (
         <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input type="text" placeholder="Text..." ref="todoText" />
            <input type="submit" value="Add"/>
         </form>
      );
   }

   handleFormSubmit(e) {
      e.preventDefault();

      const todoText = this.refs.todoText.value;

      if (todoText.trim()) {
         this.props.addTodo(todoText);
      }
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addTodo: (text) => {
         dispatch(addTodo(text));
      }
   }
};

const AddTodoContainer = connect(
   null,
   mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;