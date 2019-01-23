/**
 * Global Store
 */

import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todoReducer'

// combining all reducers and putting a specific namespace
const allReducer = combineReducers({
    todos: todoReducer
});

const store = createStore(allReducer, {
    todos: []
}, window.devToolsExtension && window.devToolsExtension());

export default store;