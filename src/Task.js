import React from 'react'

import { useState } from 'react'
//import './Task.scss';
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

	return <div className="Todo">
		{notes.map((note, index) => <div className="Todo-line" key={index}> <input className="Сheckbox" type="checkbox"  checked={note.isEdit} onChange={handleChecked(index)}/>
        {note.isEdit ? <div className="Todotext">{note.text}</div> : <input className="Entery-field" type="text" value={note.text} onChange={handleChange(index)} />}</div>)}
	</div>;
}

export default Task;
