import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Vitest</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count up</button>
        <p>Count is {count}</p>
      </div>
    </>
  );
}

export default App;
