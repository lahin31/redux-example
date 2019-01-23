/**
 * Action is responsible to tell the reducer what kind of changing should happen on store
 */

 import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from './todo-actions-types';

// action creator - is a function that creates and return an action
export const addTodo = (newName, newText, onEdit) => {
    return {
        type: ADD_TODO,
        payload: {
            name: newName,
            text: newText,
            onEdit
        }
    }
}

export const deleteTodo = todo => {
    return {
        type: DELETE_TODO,
        payload: {
            todo
        }
    }
}

export const editTodo = todo => {
    return {
        type: EDIT_TODO,
        payload: {
            todo
        }
    }
}

export const updateTodo = ({
    id,
    newName, 
    newText
}) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            name: newName,
            text: newText
        }
    }
}