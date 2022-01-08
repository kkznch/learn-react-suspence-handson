import {
  Suspense,
  useState,
} from 'react';
import {
  // AlwaysSuspend,
  SometimesSuspend,
  RenderingNotifier,
} from './components';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense" />
        <div>
          <button onClick={() => setCount((c) => c + 1)}>
            {count}
          </button>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
