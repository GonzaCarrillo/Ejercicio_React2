// src/Counter.jsx
import {useState} from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 10;

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>

      {/* Mensajes de límite */}
      {count === min && <p className="limit"> El minimo es {min}</p>}
      {count === max && <p className="limit"> Has alcanzado el máximo ({max})</p>}
    </div>
  );
}

export default Counter;
