import './App.css';

function App() {

  // const arr = [1,2,3,4]
  const arr = [
    {
      id:1,
      name:"hello"
    },
    {
      id:2,
      name:"world"
    }
  ]

  return (
    <div className="App">
        <h1>hello world</h1>
        {
          // arr.map((item)=>{
          //   return <div>{item},</div>
          // })

          // arr.filter((item)=>{
          //   if(item!=3)
          //   return item;
          // })
          // arr.map((item)=>{
          //   return <h2 key={item.id}>{item.name}</h2>
          // })
        }


    </div>
  );
}

export default App;
