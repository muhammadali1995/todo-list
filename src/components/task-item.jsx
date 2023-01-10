import { useContext } from "react"
import { taskStatus } from "../constants/task-type"
import { TaskContext } from "../state/task-context"

export default function TaskItem({ task }) {
    const { completeTask } = useContext(TaskContext)
    const onComplete = () => {
        if (task.status !== taskStatus.COMPLETE)
            completeTask(task)
    }


    return <label className={`${task.status === taskStatus.COMPLETE ? 'line-through border-gray-600 italic text-gray-500' : 'text-blue-500  border-blue-600'} border flex cursor-pointer items-center py-2 px-6 w-80 rounded-lg mt-5`}>
        <input type="checkbox"
            defaultChecked={task.status === taskStatus.COMPLETE}
            disabled={task.status === taskStatus.COMPLETE ? "disabled" : ""}
            id={task.id} onChange={onComplete} />
        <p className="ml-2 font-medium w-full">{task.text}</p>
    </label>

}