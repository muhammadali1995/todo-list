export const initialState = {
    counter: 0,
    todos: [],
};


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'load': {
            return action.todoState
        }
        case "add":
            {
                const newCounter = state.counter + 1;
                const newTodo = {
                    id: newCounter,
                    text: action.todo.text,
                };
                const newState = {
                    counter: newCounter,
                    todos: [newTodo, ...state.todos],
                };

                localStorage.setItem('my_todo_items', JSON.stringify(newState))
                return newState
            }
        case "complete":
            {
                const idx = state.todos.findIndex(t => t.id === action.todo.id);
                const todo = Object.assign({}, state.todos[idx]);
                todo.status = 'complete';
                const todos = Object.assign([], state.todos);
                todos.splice(idx, 1, todo);

                const updatedState = {
                    counter: state.counter,
                    todos: todos,
                };
                localStorage.setItem('my_todo_items', JSON.stringify(updatedState))

                return updatedState
            }
        default:
            return state;
    }
};