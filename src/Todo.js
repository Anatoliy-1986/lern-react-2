import { useState } from 'react'
import './App.css';
import React from 'react'


const arr = [
	{
		id: 1,
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...'
		},
		{
		id: 2,
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
		},
		{
		id: 3,
		author: 'Max Frontend',
		text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
		},
		{
		id: 4,
		author: 'Гость',
		text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
		}];

function Todo () {

  const [list, setList] = useState(arr);

  const [value, setValue] = useState('');

  const remItem = (index) =>  () =>  {setList([...list.slice(0, index), ...list.slice(index + 1)]);};

  function enteryNumber(event) {
	  setValue(event.target.value);
  };

  const handleChangeString = () => {
    setList([...list, {author:value}]);
    setValue('');
  };

  return (
   <div className="App">
      <div> {list.map((item, index) => <div key={index} onClick={remItem(index)}><p>{item.author}</p></div>)}</div>
        <input onChange={enteryNumber} value={value} />
        <button onClick={handleChangeString}>Добавить в список</button>
    </div>
  );}


export default Todo;