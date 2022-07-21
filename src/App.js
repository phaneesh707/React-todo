import './App.css';
import {useState} from "react";
import Form from './components/Form';
import todoList from './components/todoList';



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
          <Form
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            editId={editId}
            todo = {todo}
          />

          <todoList 
            handleEdit={handleEdit}
            handleDel={handleDel}
            todoItems={todoItems}
          />

        </div>
    </div>
  );
}

export default App;
