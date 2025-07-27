import { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // this will run even for changes in otherState
  // const doubleCountFn = () => {
  //   console.log('🔁 Calculating doubleCount...');
  //   let result = 0;
  //   for (let i = 0; i < 100000000; i++) {
  //     result += count * 2;
  //   }
  //   return result;
  // };

  const doubleCount = useMemo(() => {
    console.log('🔁 Calculating doubleCount...');
    // Simulate heavy computation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count * 2;
    }
    return result;
  }, [count]); // Only re-run when `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <h2>Double Count: {doubleCountFn()}</h2> */}
      <h2>Double Count: {doubleCount}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State: {JSON.stringify(otherState)}
      </button>
    </div>
  );
}

export default UseMemoExample;
