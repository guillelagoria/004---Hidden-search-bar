import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './App.css';

export const App = () => {

const inputRef = useRef(null);
const [flag, setFlag] = useState(false);

const changeFlag = () => {
  setFlag(!flag);
  inputRef.current.focus();
}
  return (
    <>
    <body>
      <div className= {flag ? "search active" : "search"}>
        <input type="text"  className='input' placeholder='Search...' ref={inputRef} />
        <button className='btn' onClick={changeFlag}>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </body>
    </>
    )
}


export default App
