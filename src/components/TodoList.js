
const TodoList = ({data, deleteItem}) => {

  return(

    <div className="list">
      <span className="name">
      {data.map((item,index) =><ul key={index}>
        <h5>{item} <button onClick={()=>deleteItem(item)} >delete</button></h5>
       
       </ul>

      )}</span>
       
    </div>
  );

}
export default TodoList;


