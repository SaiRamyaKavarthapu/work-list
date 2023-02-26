import { useState, useId } from "react";
import '../../src/App.css';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import '../App.css'


function App() {


  var [data, setData] = useState([]);

  const addItem = (item) => {
   const newTodos=[item];
   setData(newTodos);
  
  }
  const findItem = (item) => {

    return data.find((element) => element === item) 
    
  }

  
 const saveItem = (oldItem, newItem) => {
    let selectedItem = findItem(oldItem);
    selectedItem = newItem;
    setData([data,...selectedItem])
   
  }
  const deleteItem = (item) => {

    let index = data.map(element =>element).indexOf(item);
    data.splice(index, 1);
    setData(data)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>What's the plan for today?</h1>
      </div>

      <br />

      <AddTodo data={data} addItem={addItem} />
      <br />
      <br />
      <h2>Todo-List</h2>

      <TodoList data={data} deleteItem={deleteItem} 
       saveItem={saveItem}
       />
    </div>
  );
  }
 export default App;
