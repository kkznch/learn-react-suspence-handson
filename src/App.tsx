import {
  Suspense,
  useState,
} from 'react';
// import { AlwaysSuspend } from './components/AlwaysSuspend';
import { SometimesSuspend } from './components/SometimesSuspend';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend />
        <button onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  );
}

export default App;
