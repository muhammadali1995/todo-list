import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { TodoContext } from "../state/todo-context";
import { initialState } from "../state/todo-reducer";

export default function Home() {
    const { loadTodos } = useContext(TodoContext)

    useEffect(() => {
        const todoState = JSON.parse(localStorage.getItem('my_todo_items')) || initialState
        loadTodos(todoState)
    }, [])

    return <div className="flex flex-col items-center">
        <Navbar />
        <Outlet />
    </div>
}