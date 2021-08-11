import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
//import './Task.scss';
import './Task.css';


function Task () {
	
	  const [list, setList] = useState([]);
	
	  const [value, setValue] = useState('');

	  const [isEdit, setIsEdit] = useState(false);
	
	  const enteryText = (event) => {
		  setValue(event.target.value);
	  };
	
	  const addText = () => {
		if (!value.length) return
		setList([...list, value]);
		setValue('');
	  };

	const handleChecked = (currentIndex) => (event) => {
		list.map((item, index) => index === currentIndex ? {...item, checked:event.target.checked} : item)  
	}
/* {!isEdit ? <input value={item} onChange={event => setValue(event.target.value)}
			    onBlur={() => setIsEdit(false)}*/

	return <div className="Todo">
          {list.map((item, index) =>
		  <label key={index}>
			 <input type="checkbox" id={index} checked={item.disabled} onChange={handleChecked(index)} />
			 {!isEdit ? <span onClick={() => setIsEdit(true)}>{item}</span> : <input id={item.id} value={item} onChange={event => setValue(event.target.value)}
			    onBlur={() => setIsEdit(false)}/>}


			 </label>)}
			<input onChange={enteryText} value={value} />
			<button onClick={addText}>Добавить в список</button>	
	</div>;
}


export default Task;
