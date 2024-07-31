import { useState } from 'react'
import UserName from './UserName';
import './App.css'

const App = () => {
  const [name, setName] = useState('');

  const changeName = (element) => {
    element.preventDefault();
    setName(element.target.elements.nameInput.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={changeName}>
        <input type="text" name="nameInput" />
        <button type="submit">Submit</button>
      </form>
      <UserName name={name} />
    </div>
  );
};

export default App;