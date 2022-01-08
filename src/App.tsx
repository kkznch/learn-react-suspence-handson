import { Suspense } from 'react';
import {
  DataLoader1,
  DataLoader2,
} from './components';


function App() {
  return (
    <div>
      <h1>React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader1 />
        <DataLoader2 />
      </Suspense>
    </div>
  );
}

export default App;
