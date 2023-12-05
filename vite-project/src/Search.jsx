
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { searchTodo } from './Redax/TodoSlice';
const Search = (e) => {
  const dispatch=useDispatch()
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eae2ef', paddingBottom: '90px',position:'relative' }}>
      <input
        style={{ width: '400px', borderColor: 'purple', marginRight: '10px' }}
        type="text"
        className="form-control"
        id="usr"
        placeholder="Write to search"
        onChange={(e)=>{
          dispatch(searchTodo(e.target.value))
        }}
      />
      <i className="fas fa-search" style={{ color: 'purple', cursor: 'pointer',position:'absolute',marginLeft:'23%' }}></i>
    </div>
  );
};

export default Search;
