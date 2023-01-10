import { useContext, useState } from "react"
import { todoStatus } from "../constants/todo-type"
import { TodoContext } from "../state/todo-context"

export default function TodoItem({ todo }) {
    const { completeTodo } = useContext(TodoContext)
    const onComplete = () => {
        if (todo.status !== todoStatus.COMPLETE)
            completeTodo(todo)
    }


    return <label className={`${todo.status === todoStatus.COMPLETE ? 'line-through text-gray-500 border-gray-600' : 'text-blue-500  border-blue-600'} border flex cursor-pointer items-center py-2 px-6 w-80 rounded-lg mt-5`}>
        <input type="checkbox"
            defaultChecked={todo.status === todoStatus.COMPLETE}
            disabled={todo.status === todoStatus.COMPLETE ? "disabled" : ""}
            id={todo.id} onChange={onComplete} />
        <p className="ml-2 font-medium text-blue-500 w-full">{todo.text}</p>
    </label>

}