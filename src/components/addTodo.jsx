import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo-actions-creator';
import { bindActionCreators } from 'redux';

class AddTodos extends Component {
    state = {
        name: '',
        text: '',
        edit: false
    }
    addTodo = e => {
        e.preventDefault();
        this.props.onAddTodo(this.state.name, this.state.text, this.state.edit);
        this.setState({
            name: '',
            text: '',
            edit: false
        })
      }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.addTodo} >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="col-md-6 form-control"
                        placeholder="Name"
                        id="name"
                        value={this.state.name}
                        onChange={e=>this.setState({ name: e.target.value})}/><br />
                    <label htmlFor="text">Text</label>
                    <textarea 
                        name="text" 
                        id="text" 
                        value={this.state.text} 
                        onChange={e => this.setState({ text: e.target.value })}
                        className="col-md-6 form-control"></textarea><br />
                    <button className="btn btn-success">Add</button>
                </form>
            </div>
        );
    }
}

// responsible to fire an action
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
      onAddTodo: addTodo
    }, dispatch)
  }
  
 
export default connect(null, mapActionsToProps)(AddTodos);