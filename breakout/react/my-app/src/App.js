import { useState } from 'react';
import './App.css';

function useInputText() {
  const [inputText, setInputText] = useState('Hello!');

  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };

  return { inputText, handleChangeInput };
}

function App() {
  const { inputText, handleChangeInput } = useInputText();
  return (
    <div>
      <h1>{inputText}</h1>
      <input type='text' onChange={handleChangeInput} />
    </div>
  );
}

export default App;
