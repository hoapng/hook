import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Hoa');
  const [address, setAddress] = useState('');
  const handleEventClick = (event) => {
    setName(address)
  }
  const handleOnChange = (event) =>{
    setAddress(event.target.value);
    console.log(event.target.value)
  }
  return (
    
    <div className="App">
      <Nav></Nav>
      <div>{name} - {address}</div>
      <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
      <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
    </div>
  );
}

export default App;
