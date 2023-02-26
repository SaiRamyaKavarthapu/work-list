import React,{useState} from "react";
import { Modal } from 'react-bootstrap';


const Edit = ({item, deleteItem, saveItem}) => {
  console.log("item",item)

 const [Editing, setEditing]=useState(false);
 const [Show, setShow]=useState(false);
 const [EditInput,setEditInput]=useState("");

  const handleEdit = () => {
    onEditClick();
    handleModal();

  }
  const handleModal = () => {
    setShow(!Show)

  }

  const handleOnChange = (e) => {
    setEditInput(e.target.value);
  }

  const onEditClick = () => {
    setEditing(true);
  }

  const onSaveClick = () => {
   
    saveItem(item, EditInput);
    setShow(!Show);
    setEditing(false)
  }
 
    const renderName = () => {
        return (<>
          <ul>
         <h5>{item}  <button onClick={()=>handleEdit() }>edit</button> 
          <button onClick={()=>deleteItem(item)}>delete</button></h5> 
          </ul>  
          <Modal show={Show} animation={true} onHide={() => handleModal()}>
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Body>
            <form onClick={()=>onEditClick()}>
              <input type="text"
                defaultValue={item}
                onChange={(e) => handleOnChange(e)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => onSaveClick()}>Save</button>
            <button onClick={() => handleModal()}> Close</button> 
          </Modal.Footer>
        </Modal>

          </>
        );
      }

    //  const renderButtons = () => {
    //     return(
    //     <div className="todobutton">
    //     <span className="editdel">
    //      <button onClick={()=>deleteItem(item)}>delete</button>
    //     </span></div>)

    //  }

 
  return(

    <div className="item">
        <span className="name">
          {renderName()}
        </span>
        {/* <span className="actions">
            {renderButtons()}
        </span> */}
        </div>
  );

}
export default Edit;


