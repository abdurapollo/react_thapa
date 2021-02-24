import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import './todolist.css'

const ToDoList = () => {
   return (
       <>
          <div className="main_div">
              <div className="center_div">
                  <br />
                  <h1> ToDo List </h1>
                  <br />
                  <input type="text" placeholder="Add an Item" />
                  <Button className="newBtn">
                      <AddIcon />
                  </Button>
              </div>
          </div>
       </>
   )
}

export default ToDoList;