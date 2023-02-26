import Edit from '../Edit/Edit'

const TodoList = ({data, deleteItem,saveItem}) => {
  console.log("data",data)
 
  const renderItems = () => {
    return data.map((item,index) =><><Edit key={index} item={item} deleteItem={deleteItem} saveItem={saveItem}/></>)
   
 }

 
  return(
    <div className="items-list">
     {renderItems()}
    </div>
  );

}
export default TodoList;


