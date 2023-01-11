import { TaskContext } from "../state/task-context"
import { useContext } from 'react'

export default function CompletedTaskItem({ task }) {
    const { removeTask } = useContext(TaskContext)
    
    return <label className='border-gray-600 italic text-gray-500 border flex cursor-pointer items-center py-2 px-6 w-80 rounded-lg mt-5'>
        <input type="checkbox"
            checked
            disabled="disabled" />
        <p className='ml-2 font-medium w-full line-through'>{task.text}</p>
        <button onClick={() => removeTask(task)} className="border-0 text-grey-50">save</button>
    </label>
}