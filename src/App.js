import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Hoa');
  const [address, setAddress] = useState('');
  const [todo, setTodo] = useState([
    {id: '1', value: 'homework'}
  ]);
  const handleEventClick = (event) => {
    if(!address){
      alert('empty');
      return;
    }
    let newTodo = { id: Math.random(), value: address}
    setTodo([...todo, newTodo])
    setAddress('')
  }
  const handleOnChange = (event) =>{
    setAddress(event.target.value);
    console.log(event.target.value)
  }
  return (
    
    <div className="App">
      <Nav></Nav>
      <div>{name}</div>
      <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
      <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      <div className='todo-container'>
        {todo&&todo.length>0&&todo.map(todo=>{
          return(
            <li className='todo-child' key={todo.id}>{todo.value}</li>
          )
        })}
      </div>
    </div>
  );
}

export default App;
