import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const[todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault();
        addTodo({
            todo,
            completed:false
        })
        setTodo("")
    }
  return (
    <div>
      <form onSubmit={add} className="flex">
        <input type="text" 
        placeholder='Write todo...'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className='w-full rounded-l-xl outline-none py-2 px-4'
        />
        <button type="submit"
        className='bg-green-600 text-white px-6 py-2 rounded-r-xl font-semibold hover:bg-green-800 duration-300'
        >Add</button>
      </form>
    </div>
  )
}

export default TodoForm
