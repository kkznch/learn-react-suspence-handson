import { Suspense } from 'react';
import { AlwaysSuspend } from './components/AlwaysSuspend';

function App() {
  return (
    <div>
      <h1>React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
}

export default App;
