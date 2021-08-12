import React from 'react'

import { useState } from 'react'
import './Task.css';


const initNotes = [
	{text: 'First mission: Learn html', isEdit: false},
	{text: 'Second mission: Learn css', isEdit: false},
	{text: 'Third mission: Learn react', isEdit: false},
];

function Task () {
	
	const [notes, setNotes] = useState(initNotes);
	
    const handleChecked = (currentIndex) => (event) => {
		const result = notes.map((note, index) => index === currentIndex ? {...note, isEdit:event.target.checked} : note)  
        setNotes(result)
	}

    const handleChange = (currentIndex) => (event) => {
		const result = notes.map((note, index) => index === currentIndex ? {...note, text:event.target.value} : note)  
        setNotes(result)
	}

	const removeTodoLine = (currentIndex) => (event) => { 
	   const result = notes.filter((__, index) => index !== currentIndex)  
      setNotes(result)
	}

	return <div className="Todo">
		{notes.map((note, index) => <div className="Todo-line" key={index}> <input className="Сheckbox" type="checkbox" id={index} checked={note.isEdit} onChange={handleChecked(index)}/><label htmlFor={index}></label>
        {note.isEdit ? <div className="Todotext">{note.text}</div> : <input className="Entery-field" type="text" value={note.text} onChange={handleChange(index)} />} 
		<i className="material-icons red-text"
          onClick={removeTodoLine(index)}
        >delete</i></div>)}
	</div>;
}

export default Task;
