import { Suspense } from 'react';
import { DataLoader } from './components';


function App() {
  return (
    <div>
      <h1>React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
      </Suspense>
    </div>
  );
}

export default App;
