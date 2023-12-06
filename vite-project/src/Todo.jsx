import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from './Redax/TodoSlice';
const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div style={{border:'1px dashed '}} >
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">{todo.id}</p>
          <p className="card-text" style={{color:todo.color}}>{todo.title} </p>
          <p className="card-text">{todo.content}</p>
          <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
