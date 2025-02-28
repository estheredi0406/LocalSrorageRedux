import { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useState(+localStorage.getItem("count") || 0);
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Your Count is {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}

export default App;
