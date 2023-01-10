import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { TaskContext } from "../state/task-context";
import { initialState } from "../state/task-reducer";

export default function Home() {
    const { loadTasks } = useContext(TaskContext)

    useEffect(() => {
        const taskState = JSON.parse(localStorage.getItem('my_tasks')) || initialState
        loadTasks(taskState)
    }, [])

    return <div className="flex flex-col items-center">
        <Navbar />
        <div className="mt-5">
            <Outlet />
        </div>
    </div>
}