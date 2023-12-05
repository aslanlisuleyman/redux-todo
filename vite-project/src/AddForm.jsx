import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './Redax/TodoSlice';
const addForm = () => {
   const [note,setNote]=useState({title:"",content:"", id:"", color:""})
   const [colors,setColors]=useState(["red","green","pink","blue","purple"])
   const dispatch = useDispatch()
 const handleChange = (e)=>{
 setNote({...note,[e.target.name]:e.target.value})
 }

const handleSubmit=(e)=>{
  e.preventDefault()
  note.id=uuidv4()
 dispatch(addTodo(note))
 setNote({title:"",content:"", id:"", color:""})
}



  return ( 
    <div  style={{backgroundColor:'#eae2ef'}}>

<div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
       <div style={{padding:'45px'}}>
       <p style={{textAlign:'center',fontWeight:'700',fontSize:'25px'}}>Data Redux <span style={{color:'rgb(126, 87, 194)'}}>Note</span>Pad</p>
       <input name='title' value={note.title} onChange={handleChange} style={{width:'400px', borderColor: 'purple'}} type="text" class="form-control" id="usr" placeholder='Note Title'></input>
       <textarea name='content' value={note.content}  onChange={handleChange} style={{width:'400px',marginTop:'30px',height:'150px', borderColor: 'purple'}} class="form-control" id="textAreaExample2" rows="8" placeholder='Write note...'></textarea>
       </div>     
</div>


<div>
  {
    colors && colors.map((item,index)=>(
      <label htmlFor={item} key={index} className='colorlabel' style={{backgroundColor:item}}>
        <input type="radio" name='color' value={item} onChange={handleChange} id={item} style={{display:"none"}} />
      </label>
    ))
  }

</div>
 <button onClick={handleSubmit}>Save</button>

    </div>
  )
}

export default addForm




