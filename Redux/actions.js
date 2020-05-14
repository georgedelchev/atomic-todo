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

export const setTodoPopup = bool => {
    return {
        type: 'SET_TODO_POPUP',
        bool
    }
}

export const addTodo = (title, priority) => {
    return {
        type: 'ADD_TODO',
        todo: {
            id: uuid(),
            title,
            isComplete: false,
            visibility: 'flex',
            isEditMenuVisible: false,
            priority
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

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id,
    }
}

export const undoTodo = () => {
    return {
        type: 'UNDO_TODO'
    }
}

export const setUndoPopup = bool => {
    return {
        type: 'SET_UNDO_POPUP',
        bool
    }
}

export const setEditMenu = (bool, id) => {
    return {
        type: 'SET_EDIT_MENU',
        bool,
        id
    }
}

export const editTodoText = (newText, id) => {
    return {
        type: 'EDIT_TODO_TEXT',
        newText,
        id
    }
}

export const filterTodos = input => {
    return {
        type: 'FILTER_TODOS',
        input
    }
}