import React from 'react';
import { useCounterStore } from '../stores/counterStore';

const ZustandPage: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>Zustand Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ZustandPage;