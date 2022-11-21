
import { useState} from "react";


const AddTodo = ({data, addItem}) => {
    var [newInputItem, setnewInputItem] = useState('');

    
    const handleOnCreate = (e) => {
        e.preventDefault();
        Promise.resolve(addItem(newInputItem)).then(() => {
            setnewInputItem('')
        });
        console.log("newInputItem",newInputItem)
      }

    const handleOnChange = (event) => {
        setnewInputItem(event.target.value);
        console.log("newInputItem",newInputItem)
      }
      

   
    
    return (
      <>
      <div className="textField">
        <input 
          type="text"
          placeholder="Enter your task"
          required
          value= {newInputItem}
           onChange={handleOnChange} 
          />
        
           <button onClick={handleOnCreate} >
                AddTask
            </button>


      </div>
       
      
      </>
    );
  };
  
  export default AddTodo;
  