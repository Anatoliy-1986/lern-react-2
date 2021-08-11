import React from 'react'

import { useState } from 'react'
//import './Task.scss';
import './Task.css';


const initNotes = [
	{text: 'note1', isEdit: false},
	{text: 'note2', isEdit: false},
	{text: 'note3', isEdit: false},
];

function Todos() {
	const [notes, setNotes] = useState(initNotes);
	
    const handleChecked = (currentIndex) => (event) => {
		const result = notes.map((note, index) => index === currentIndex ? {...note, isEdit:event.target.checked} : note)  
        setNotes(result)
	}

    const handleChange = (currentIndex) => (event) => {
		const result = notes.map((note, index) => index === currentIndex ? {...note, text:event.target.value} : note)  
        setNotes(result)
	}

	return <ul>
		{notes.map((note, index) => <div key={index}> <input type="checkbox"  checked={note.isEdit} onChange={handleChecked(index)}/>
        {note.isEdit ? <span className="Todostext">{note.text}</span> : <input type="text" value={note.text} onChange={handleChange(index)} />}</div>)}
	</ul>;
}

export default Todos;