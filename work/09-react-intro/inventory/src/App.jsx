import { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => count - 1);

  const getReorder = () => setCount(5);

  return (
    <>
      <h1>React Inventory</h1>
      <div className="inventory">
        <h2>Inventory Count: {count}</h2>
        <button onClick={decreaseCount} disabled={!count}>
          -
        </button>
        <button onClick={increaseCount}>
          +
        </button>
        {count === 0 ? <Reorder onReorder={getReorder} /> : null}
      </div>
    </>
  );
}

export default App;
