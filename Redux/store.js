import { createStore } from 'redux';

const initialState = {
    isTodoPopupVisible: false,
    isUndoPopupVisible: false,
    todoList: [],
    lastDeletedTodo: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER_TODOS':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(action.input !== '') {
                        if(new RegExp(`${action.input}`, 'i').test(todo.title)) {
                            todo.visibility = 'flex';
                            return todo
                        } else {
                            todo.visibility = 'none';
                            return todo;
                        }
                    }
                    todo.visibility = 'flex';
                    return todo;
                })
            }
        case 'EDIT_TODO_TEXT':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(todo.id === action.id) {
                        todo.title = action.newText;
                    }
                    return todo;
                })
            }
        case 'SET_EDIT_MENU':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(todo.id === action.id) {
                        todo.isEditMenuVisible = action.bool
                        return todo;
                    }
                    return todo;
                })
            }
        case 'SET_UNDO_POPUP':
            return {
                ...state,
                isUndoPopupVisible: action.bool
            }
        case 'TOGGLE_TODO_POPUP':
            return {
                ...state,
                isTodoPopupVisible: !state.isTodoPopupVisible
            };
            break;
            case 'SET_TODO_POPUP':
            return {
                ...state,
                isTodoPopupVisible: action.bool
            };
        break;
        case 'ADD_TODO': 
            return {
                ...state,
                todoList: [
                    action.todo,
                    ...state.todoList,
                ]
            }
        break;
        case 'SET_TODO_STATUS':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(todo.id == action.id) {
                        return {
                            ...todo,
                            isComplete: action.bool
                        }
                    }
                    return todo
                })
            }
        break;
        case 'DELETE_TODO':
            return {
                ...state,
                lastDeletedTodo: state.todoList.filter(todo => {
                    return todo.id === action.id
                })[0],
                todoList: state.todoList.filter(todo => {
                    return todo.id !== action.id;
                }),
            }
        break;
        case 'UNDO_TODO': 
            return {
                ...state,
                todoList: [
                    state.lastDeletedTodo,
                    ...state.todoList,
                ]
            }
        default:
            return state;
        break;
    }
}

export const store = createStore(rootReducer); 
