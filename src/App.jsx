import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  // todo funcitionlaty define
  const addTodo=(todo)=>{
   setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
// localStrorage setup
useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  setTodos(todos)
},[])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='bg-slate-700 h-screen w-full pt-[150px]'>
      <div className='w-full max-w-xl rounded-xl bg-slate-800 mx-auto py-6 px-10 space-y-4 shadow-xl'>
        <h1 className='text-center text-2xl font-bold text-orange-700'>TODO App</h1>
        <div className='w-full'>
          {/* TodoForm will be here */}
          <TodoForm/>
        </div>
        <div className=' flex flex-wrap  space-y-3'>
          {/* TodoItem will be here */}
          {
            todos.length>0 && todos.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
