import React from 'react'

export const todoList = ({handleDel,handleEdit,todoItems}) => {
  return (
    <ul className='todoList'>

            {
              todoItems.map(item=>{
                return(
                  <li className='singleItem'>
                    <span className='itemTitle' key={item.id}>{item.todo}</span>
                    <button onClick={()=>handleEdit(item.id)} >Edit</button>
                    <button onClick={()=>handleDel(item.id)}>Delete</button>
                  </li>
                )
              })
            }
    </ul>
  )
}

export default todoList;