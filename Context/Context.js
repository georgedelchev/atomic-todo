import React, {useReducer} from 'react';

export const Context = React.createContext({});

const rootReducer = (state, action) => {
    switch(action.type) {
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
                state,
                todoList: [
                    ...state.todoList,
                    action.todo
                ]
            }
        break;
        case 'SET_TODO_STATUS':
            return {
                state,
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
                todoList: state.todoList.filter(todo => {
                    return todo.id !== action.id;
                })
            }
        default:
            return state;
        break;
    }
}

const initialState = {
    isTodoPopupVisible: false,
    todoList: []
}

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default StateProvider
