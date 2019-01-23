/**
 * Reducer is responsible to manupulate the store based on the action
 */

import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from '../actions/todo-actions-types';

const initialState = {
    items: [],
    item: {}
}

export default function todoReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case ADD_TODO:
            let arr = [...state];
            arr.push({ id: Math.floor(Math.random() * 100) + 1, name: payload.name, text: payload.text, onEdit: false })
            return arr;
        case DELETE_TODO:
            let _arr = [...state];
            let todoIndex = _arr.findIndex((val) => val.name === payload.todo);
            _arr.splice(todoIndex, 1)
            return _arr
        case EDIT_TODO: 
            let edit_arr = [...state];
            let editTodoIndex = edit_arr.findIndex((val) => val === payload.todo);
            edit_arr[editTodoIndex].onEdit = ! edit_arr[editTodoIndex].onEdit
            return edit_arr
        case UPDATE_TODO: 
            let updatePosts = [...state];
            let updateTodoIndex = updatePosts.findIndex((val) => val.id === payload.id);
            if(updateTodoIndex !== -1) {
                updatePosts[updateTodoIndex].name = payload.name;
                updatePosts[updateTodoIndex].text = payload.text;
            }
            return updatePosts
        default: 
            return state
    }
}