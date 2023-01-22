import React from 'react'
import "./Contact.css"
import { useState } from 'react'
const Contactform = () => {
  const [message,setMessage]=useState({
    query:'',
    feedback:''
  })
  const handleAdd=(e)=>{
    e.preventDefault();
    setMessage({...message,[e.target.name]:e.target.value})
    
  }
  return (
    <div className='app-contactform'>
      <form className='app-input-form'>
        <input type="text" name="query" value={message.query} onChange={handleAdd} placeholder='write your query'/>
        <input type="text" name="feedback" value={message.feedback} onChange={handleAdd} placeholder='any suggestion'/>
        <button type="submit">Submit</button>
       
      </form>
    </div>
  )
}

export default Contactform
