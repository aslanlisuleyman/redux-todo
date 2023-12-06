import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import TodoList from './TodoList'
import AddForm from './AddForm'
import Search from './Search'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddForm/>
    <Search/>
     <TodoList/>
    <Footer/>
   
    </>
  )
}

export default App
