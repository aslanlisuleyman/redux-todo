import {createSlice} from '@reduxjs/toolkit'
const initialState={
    todos: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []

}

const todos=createSlice({
    name:'todos',
    initialState,
    reducers:{
    addTodo:(state,action)=>{
        state.todos=[
            ...state.todos,
            action.payload,
        ]
        localStorage.setItem("notes",JSON.stringify(state.todos))
    },
    deleteTodo:(state,action)=>{
        state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        localStorage.setItem("notes",JSON.stringify(state.todos))
    },
    searchTodo:(state,action)=>{
       state.todos = JSON.parse(localStorage.getItem("notes"))
       const searched = action.payload.toLowerCase();
       state.todos = state.todos.filter((note)=>
       note.title.toLowerCase().includes(searched)
       )
    }
    }
})
export const{addTodo,deleteTodo,searchTodo}=todos.actions
export default todos.reducer