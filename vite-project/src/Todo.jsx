import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from './Redax/TodoSlice';
import './Todo.css'
const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    // <div style={{border:'1px dashed '}} >
    //   <div className="card" style={{ width: '18rem' }}>
    //     <div className="card-body">
    //       <p className="card-text">{todo.id}   </p>
    //       <p className="card-text" style={{color:todo.color}}>{todo.title} </p>
    //       <p className="card-text">{todo.content}</p>
    //       <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
    //     </div>
    //   </div>
    // </div>

    <div className="card" style={{ width: '18rem', borderColor: todo.color }}>
    <div className="card-body">
      <p className="card-text text" style={{ backgroundColor: todo.color }}>{todo.title} </p>
      <p className="card-text" >{todo.content}</p>
      <svg onClick={() => dispatch(deleteTodo(todo.id))} stroke="currentColor" fill="currentColor"  strokeWidth="0" viewBox="0 0 16 16" class="svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
    </div>
  </div>
  );
};

export default Todo;
