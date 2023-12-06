import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
const TodoList = () => {
    const {todos} = useSelector((state) => state.TodoSlice)
    console.log(todos)
  return (
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'60px',marginTop:'30px'}}>
      {
        todos && todos.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
