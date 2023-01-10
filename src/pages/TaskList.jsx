import React, { useContext } from "react"
import TaskItem from '../components/task-item'
import AddTask from "../components/add-task"
import { TaskContext } from "../state/task-context"

export default function TaskList() {
    const {taskState, createTask } = useContext(TaskContext)

    return <>
        <AddTask createTask={createTask} />
        <div className="flex flex-col items-center max-h-[50rem] overflow">
            {taskState.tasks.map(task => <TaskItem key={task.id} task={task} />)}
        </div>
    </>
}