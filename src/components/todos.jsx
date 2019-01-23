import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, editTodo, updateTodo } from '../actions/todo-actions-creator';

class Todos extends Component {
    render() {
        const deleteTodo = todo => {
            this.props.onDeleteTodo(todo);
        }
        const handleTodoEdit = todo => {
            this.props.onEditTodo(todo)
        }
        const handleEditSubmit = (e, todo) => {
            e.preventDefault();
            let newName = this.getName.value;
            let newText = this.getText.value; 
            this.props.onEditTodo(todo)
            let updatedData = {
                id: todo.id,
                newName,
                newText
            }
            this.props.onUpdateTodo(updatedData)
        }
        return (
            <div>
                <h3>All Posts</h3>
                {
                    this.props.todos.map((todo, i) => (
                        <div key={i}>
                            {todo.onEdit !== true ? (
                                <React.Fragment>
                                    <p><b>Name: </b>{todo.name}</p>
                                    <p><b>Text: </b>{todo.text}</p>
                                    <div>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteTodo(todo.name)}>Delete</button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleTodoEdit(todo)}>Edit</button>
                                    </div>
                                </React.Fragment>
                            ): (
                                <div>
                                    <h5>Edit Information</h5>
                                    <form onSubmit={e =>handleEditSubmit(e, todo)}>
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            defaultValue={todo.name} 
                                            ref={input => this.getName = input}
                                            className="col-md-6 form-control"/>
                                        <label>Text</label>
                                        <textarea 
                                            name="text" 
                                            id="text" 
                                            defaultValue={todo.text}
                                            className="col-md-6 form-control"
                                            ref={text => this.getText = text}></textarea>
                                        <button className="btn btn-primary">Save</button><br />
                                        <button className="btn btn-danger"  onClick={() => handleTodoEdit(todo)}>Cancel</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        )
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

export default connect(mapStateToProps, mapActionsToProps)(Todos)