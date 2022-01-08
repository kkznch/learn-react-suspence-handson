import { useData1 } from '../hooks/UseData1';

export const DataLoader1: React.VFC = () => {
  const data = useData1('DataLoader1');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};

export const DataLoader2: React.VFC = () => {
  const data = useData1('DataLoader2');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};

