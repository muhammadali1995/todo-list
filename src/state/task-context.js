import { createContext, useReducer } from "react";
import { taskReducer } from "./task-reducer";

export const TaskContext = createContext([])

export const TaskContextProvider = ({ children }) => {
    const [taskState, dispatch] = useReducer(taskReducer, { counter: 0, tasks: [] })

    const createTask = (task) => {
        dispatch({ type: 'add', task })
    }
    
    const loadTasks = (taskState) => {
        dispatch({ type: 'load', taskState })
    }

    const updateTask = (task) => {
        dispatch({ type: 'update', task })
    }

    const removeTask = (task) => {
        dispatch({ type: 'remove', task })
    }

    return <TaskContext.Provider value={{ taskState, dispatch, createTask, updateTask, loadTasks, removeTask }}>
        {children}
    </TaskContext.Provider>
}