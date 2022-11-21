import { useState, useId } from "react";
import AddTodo from './AddTodo'
import TodoList from './TodoList'


function App() {


    var [data, setData] = useState([]);
    const addItem = (item) => {
    const newTodos = [...data, item]
    console.log("newTodos", newTodos)
    setData(newTodos);
  }

  const deleteItem = (element) => {
    let index = data.map(element => element).indexOf(element);
    data.splice(index, 1);
    const newTodos = [...data]
    setData(newTodos);
  }

  return (

    <div className="container-md">
      <h1>Todo-List</h1>
      <br />

      <AddTodo data={data} addItem={addItem} />
      <br />
      <br />

      <TodoList data={data} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
