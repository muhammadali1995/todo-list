import { useContext, useEffect, useState } from "react";
import TodoItem from "../components/todo-item";
import { TodoContext } from "../state/todo-context";

export default function Completed() {
    const [completedTodos, setCompletedTodos] = useState([])
    const { todoState } = useContext(TodoContext)

    useEffect(() => {
        const completed = todoState.todos.filter(item => item.status === "complete")
        setCompletedTodos(completed)
    }, [todoState.todos])

    return (
        <div className="flex items-center flex-col">
            {completedTodos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    )
}