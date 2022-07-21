import React from 'react'

const Form = ({handleChange,handleSubmit,editId,todo}) => {
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
            <input
             type="text"
              value={todo} 
              onChange={handleChange}
              placeholder="Task..."  
            />
            <button type='submit'>{editId?"Edit":"Post"}</button>
    </form>
  )
}

export default Form