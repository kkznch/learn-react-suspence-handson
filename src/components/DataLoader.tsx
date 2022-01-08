import { useState } from 'react';
import { fetchData1 } from '../libs/api';

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
  if (loading && data === null) {
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};
