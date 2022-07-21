import './App.css';
import {useState} from "react";

function App() {
  const [todo, settodo] = useState("")
  const [todoItems, settodoItems] = useState([])
  const [editId, seteditId] = useState(0)
  
  const handleChange = (e)=>{
      settodo(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(editId){
      const editTodo = todoItems.find(i=>i.id == editId)
      const updatedTodos = todoItems.map(t=>t.id===editTodo.id?(t={id:t.id,todo}):{id:t.id,todo:t.todo})
      settodoItems(updatedTodos);
      seteditId(0)
      settodo("");
      return;
    }
    
    if(todo!==""){
      settodoItems((prev)=>{
        return [...prev,{id:`${Date.now()}`,todo}]
      })
      settodo("")
    }
  
  }

  const handleEdit = (id)=>{
    const editTodo = todoItems.find((i)=>i.id===id);
    settodo(editTodo.todo);
    seteditId(id);
  }

  const handleDel = (id) =>{
    const delTodo = todoItems.filter(item=> item.id!==id)
    settodoItems([...delTodo]);
  }

  return (
    <div className="App">
        <div className='container'>
          <h1 className='title'>TODO LIST</h1>
          <form className='todoForm' onSubmit={handleSubmit}>
            <input
             type="text"
              value={todo} 
              onChange={handleChange}
              placeholder="Task..."  
            />
            <button type='submit'>{editId?"Edit":"Post"}</button>
          </form>

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

        </div>
        


    </div>
  );
}

export default App;
