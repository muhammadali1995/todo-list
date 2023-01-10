import { useContext, useEffect, useState } from "react";
import TaskItem from "../components/task-item";
import { TaskContext } from "../state/task-context";

export default function CompletedList() {
    const [completedTasks, setCompletedTasks] = useState([])
    const { taskState } = useContext(TaskContext)

    useEffect(() => {
        const completed = taskState.tasks.filter(item => item.status === "complete")
        setCompletedTasks(completed)
    }, [taskState.tasks])

    return (
        <div className="flex items-center flex-col">
            {completedTasks.map(task => {
                return <TaskItem key={task.id} task={task} />
            })}
        </div>
    )
}