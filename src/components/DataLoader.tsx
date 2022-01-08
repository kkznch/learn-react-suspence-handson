import { useData1 } from '../hooks/UseData1';

export const DataLoader: React.VFC = () => {
  const data = useData1();
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
