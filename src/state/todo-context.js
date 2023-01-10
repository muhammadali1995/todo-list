import { createContext, useReducer } from "react";
import { todoReducer } from "./todo-reducer";

export const TodoContext = createContext([])

export const TodoContextProvider = ({ children }) => {
    const [todoState, dispatch] = useReducer(todoReducer, { counter: 0, todos: [] })

    const createTodo = (todo) => {
        dispatch({ type: 'add', todo })
    }
    
    const loadTodos = (todoState) => {
        dispatch({ type: 'load', todoState })
    }

    const completeTodo = (todo) => {
        dispatch({ type: 'complete', todo })
    }

    return <TodoContext.Provider value={{ todoState, dispatch, createTodo, completeTodo, loadTodos }}>
        {children}
    </TodoContext.Provider>
}