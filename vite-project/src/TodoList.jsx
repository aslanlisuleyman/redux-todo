import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Todo.css'
import Todo from './Todo'
const TodoList = () => {
    const {todos} = useSelector((state) => state.TodoSlice)
    console.log(todos)
  return (
    <div className='cards' style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'60px'}}>
      {
        todos && todos.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
