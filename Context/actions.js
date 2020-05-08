const uuid = () => {
    let result, i, j;
    result = '';
    for(j=0; j<32; j++) {
        if( j == 8 || j == 12 || j == 16 || j == 20) 
        result = result + '-';
        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
        result = result + i;
    }
    return result;
}

export const toggleTodoPopup = () => {
    return {
        type: 'TOGGLE_TODO_POPUP'
    }
}

export const setTodoPopup = (bool) => {
    return {
        type: 'SET_TODO_POPUP',
        bool
    }
}

export const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        todo: {
            id: uuid(),
            title,
            isComplete: false
        }
    }
}

export const setTodoStatus = (id, bool) => {
    return {
        type: 'SET_TODO_STATUS',
        id,
        bool
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id,
    }
}