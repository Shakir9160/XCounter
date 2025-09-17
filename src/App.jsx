import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
