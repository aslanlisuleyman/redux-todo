import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
const TodoList = () => {
    const {todos} = useSelector((state) => state.TodoSlice)
    console.log(todos)
  return (
    <div>
      {
        todos && todos.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
