import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
//import './Task.scss';
import './Task.css';


function Task () {
	
	  const [list, setList] = useState([
       {name: 'First mission', completed: false},
	   {name: 'Second mission', completed: false}
	  ]);
	
	  const [value, setValue] = useState('');


	
	  const enteryText = (event) => {
		  setValue(event.target.value);
	  };
	
	  const addText = () => {
		if (!value.length) return
		setList([...list, {name: value, completed: false}]);
		setValue('');
	  };
	  
	/*let msg;
   if(disabled){
      msg = <span>галочка есть</span>
   }else{
      msg = <span>галочки нет</span>
	  <span>{msg}</span>
   }*/

	 
	const handleChecked = (currentIndex) => (event) => {
		list.map((item, index) => index === currentIndex ? {...item, checked:event.target.checked} : item)
		
	}


	return <div className="Todo">
          {list.map((item, index) => 
		  <label key={index}>
			 <input type="checkbox" id={index} checked={item.completed} onChange={handleChecked(index)} />
			 <span>{item.name}</span></label>)}
			<input onChange={enteryText} value={value} />
			<button onClick={addText}>Добавить в список</button>
			
			
	</div>;
}


export default Task;
