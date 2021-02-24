import React, {useState} from 'react'
import ToDoLists from './ToDoLists'

const Todo = () => {

  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const addItem = (event) => {
    setInputList(event.target.value)
  } 

  const listOfItems = () => {
     setItems( (oldItems) => {
         return [...oldItems, inputList]
     })
     setInputList("")
    
  }

  const deleteItems = (id) => {
    console.log('deleted')
    setItems((oldItems) => {
       return oldItems.filter((arrElem, index) => {
         return index !== id
       })
    })
}

  return (
    <>
      <div className="main_div">
         <div className="center_div">
           <br />
           <h1>Todo List</h1>
           <br />
           <input 
             type="text"
             placeholder="Enter Todo Item"
             value={inputList}
             onChange={addItem}
           />
           <button onClick={listOfItems}> + </button>
           <ol>
             {/* <li>{inputList}</li> */}
             
             {
             Items.map( (itemval, index) => {
               return <ToDoLists text={itemval} key={index} id={index} onSelect={deleteItems}/>
             })
            }
           </ol>
         </div>
      </div>
    </>
  )

}
export default Todo;