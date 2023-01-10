import { useRef } from "react"

export default function AddTask({ createTask }) {

    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        const val = inputRef.current.value;
        if (val.trim() !== '') {
            createTask({ text: val })
        }
        inputRef.current.value = ''
    }
    return <form onSubmit={onSubmit} className='flex'>
        <input ref={inputRef} type="text" placeholder="Task name"
            className="border border-blue-600 rounded-l-full py-2 px-6 outline-none font-semibold" />
        <button type="submit" className="bg-blue-600 text-white rounded-r-full py-2.5 px-6">Add</button>
    </form>
} 