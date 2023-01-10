import React, { useContext } from "react"
import TodoItem from '../components/todo-item'
import { TodoContext } from "../state/todo-context"
import AddTodo from "../components/add-todo"

export default function Todo() {
    const {todoState, createTodo } = useContext(TodoContext)

    return <>
        <AddTodo createTodo={createTodo} />
        <div className="flex flex-col items-center">
            {todoState.todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    </>
}