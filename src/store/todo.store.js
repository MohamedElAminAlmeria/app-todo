import {Todo} from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Pieda del alma'),
        new Todo('Pieda del infinito'),
        new Todo('Pieda del tiempo'),
    ],
    filter: Filters.All,

}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch ( filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter (todo => todo.done); // devolver el arreglo si done es true (todo => todo.done === true)
        case Filters.Pending:
            return state.todos.filter (todo => !todo.done); //(todo => todo.done === false)
        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
}

/**
 * 
 * @param {String} descripcion 
 */
const addTodo = (descripcion) => {
    if ( !descripcion ) throw new Error ('Description is requered');
    state.todos.push( new Todo(descripcion));
}

/**
 * 
 * @param {String} todoId Tofo identificador
 */

const toggleTodo =  ( todoId )  => {
    throw new Error('Not implemented');
}

const deleteTodo = ( todoId) => {
    state.todos = state.todos.filter ( todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter ( todo => todo.done);
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
} 

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}