import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = () => {

const [count, setCount] = useState(0)

const countInc = () => {
  setCount(count+1)
}

const countDec = () => {
  if(count!='0')
  {
     setCount(count-1)
  }
  else
  {
    alert('you cannot decrease ')
  }
  
}

   return (
     <>
        <div className="main_div">
          <div className="center_div">
          <h1>{count}</h1>
          <div className="btn_div">
          <Tooltip title="Add" aria-label="add">
            <Button onClick={countInc} className="btn_green"><AddIcon /></Button>
          </Tooltip> 
          <Tooltip title="Delete">
            <Button onClick={countDec} className="btn_red"><RemoveIcon /></Button>
          </Tooltip> 
          </div>  
          </div>
        </div>
     </>
   )
}
export default IncDec;