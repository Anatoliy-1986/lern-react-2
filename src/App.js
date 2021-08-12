import { useState } from 'react'
import './App.css';
import React from 'react'



const arr = [1, 2, 3, 4, 5];

function App() {
  
const [value, setValue] = useState('');
const [list, setList] = useState(arr);
const remItem = (index) =>  () => {setList([...list.slice(0, index), ...list.slice(index + 1)]);};
  
	function enteryNumber(event) {
		setValue(event.target.value);
	}
  const handleChangeString = () => {
    setList([...list, value]);
    setValue('');
  };

  return (
   <div className="App">
      <div> {list.map((item, index) => <div key={index} onClick={remItem(index)}>{item}</div>)}</div>
        <input onChange={enteryNumber} value={value} />
        <button onClick={handleChangeString}>Добавить в список</button>
    </div>
  );}


export default App;
