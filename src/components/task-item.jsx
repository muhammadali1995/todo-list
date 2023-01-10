import { useContext } from "react"
import { taskStatus } from "../constants/task-type"
import { TaskContext } from "../state/task-context"

export default function TaskItem({ task }) {
    const { updateTask } = useContext(TaskContext)
    const onUpdate = () => {
        const updatedTask = task

        if (task.status === taskStatus.COMPLETE) {
            updatedTask.status = taskStatus.TODO
        } else {
            updatedTask.status = taskStatus.COMPLETE
        }

        updateTask(updatedTask)
    }


    return <label className={`${task.status === taskStatus.COMPLETE ? 'line-through border-gray-600 italic text-gray-500' : 'text-blue-500  border-blue-600'} border flex cursor-pointer items-center py-2 px-6 w-80 rounded-lg mt-5`}>
        <input type="checkbox"
            defaultChecked={task.status === taskStatus.COMPLETE}
            id={task.id} onChange={onUpdate} />
        <p className="ml-2 font-medium w-full">{task.text}</p>
    </label>

}