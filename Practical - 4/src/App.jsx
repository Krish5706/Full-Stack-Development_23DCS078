import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div className="container">
    
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 5)}>Increment Five</button>
      </div>

      <h1>Wecome to CHARUSAT!!!</h1>

      <div className="input-box">

        <div className='input-f1'>
          <label htmlFor="f-name">First Name:</label>
          <input
            id="f-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-f2">
          <label htmlFor="l-name">Last Name:</label>
           <input
             id="l-name"
             type="text"
             placeholder="Surname"
             value={surname}
             onChange={(e) => setSurname(e.target.value)}
           />
        </div>
        
      </div>

      <p>First Name: {firstName}</p>
      <p>Last Name: {surname}</p>
    </div>
  );
}

export default App;
