export const initialState = {
    counter: 0,
    tasks: [],
};


export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'load': {
            return action.taskState
        }
        case "add":
            {
                const newCounter = state.counter + 1;
                const newTask = {
                    id: newCounter,
                    text: action.task.text,
                };
                const newState = {
                    counter: newCounter,
                    tasks: [newTask, ...state.tasks],
                };

                localStorage.setItem('my_tasks', JSON.stringify(newState))
                return newState
            }
        case "update":
            {
                const idx = state.tasks.findIndex(t => t.id === action.task.id);
                const task = Object.assign({}, state.tasks[idx]);
                task.status = action.task.status;
                const tasks = Object.assign([], state.tasks);
                tasks.splice(idx, 1, task);

                const updatedState = {
                    counter: state.counter,
                    tasks: tasks,
                };
                localStorage.setItem('my_tasks', JSON.stringify(updatedState))

                return updatedState
            }

        case 'remove':
            {
                const idx = state.tasks.findIndex(t => t.id === action.task.id);
                const tasks = Object.assign([], state.tasks);
                tasks.splice(idx, 1);
                const updatedState = {
                    counter: state.counter,
                    tasks: tasks,
                };

                localStorage.setItem('my_tasks', JSON.stringify(updatedState))

                return updatedState
            }
        default:
            return state;
    }
};