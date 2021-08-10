import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './Task.scss';


function Task () {
	
	  const [list, setList] = useState([]);
	
	  const [value, setValue] = useState('');

	  const [disabled, setDisabled] = useState(false);
	
	  function enteryNumber(event) {
		  setValue(event.target.value);
	  };
	
	  const handleChangeString = () => {
		setList([...list, value]);
		setValue('');
	  };
	  
	/*let msg;
   if(disabled){
      msg = <span>галочка есть</span>
   }else{
      msg = <span>галочки нет</span>
	  <span>{msg}</span>
   }*/

	 /* const soldCheckbox = ({ target: { checked } }) => {
		
		setDisabled(checked);
	  };*/
	
	return <div className="Todo">
          {list.map((item, index) => 
		  <label key={index}>
			 <input type="checkbox" id={index} checked={disabled} onChange={ () => setDisabled(!disabled)} />
			 <span>{item}</span></label>)}
			<input onChange={enteryNumber} value={value} />
			<button onClick={handleChangeString}>Добавить в список</button>
			
			
	</div>;
}


export default Task;
