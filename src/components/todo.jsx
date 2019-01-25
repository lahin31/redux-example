import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, editTodo, updateTodo } from '../actions/todo-actions-creator';

class Todo extends Component {
    state = {  }
    render() { 
        const deleteTodo = todo => {
            this.props.onDeleteTodo(todo);
        }
        const handleTodoEdit = todo => {
            this.props.onEditTodo(todo)
        }
        return ( 
            <div>
                <p><b>Name: </b>{this.props.todo.name}</p>
                <p><b>Text: </b>{this.props.todo.text}</p>
                <div>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(this.props.todo.name)}>Delete</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleTodoEdit(this.props.todo)}
                        style={{ marginLeft: "10px" }}>Edit</button>
                </div>
            </div>
        );
    }
}

// responsible to get state from global store
const mapStateToProps = state => {
    return {
      todos: state.todos
    }
}

// responsible to fire an action
const mapActionsToProps = dispatch => {
    return bindActionCreators({
        onDeleteTodo: deleteTodo,
        onEditTodo: editTodo,
        onUpdateTodo: updateTodo
    }, dispatch)
  }
 
export default connect(mapStateToProps, mapActionsToProps)(Todo);