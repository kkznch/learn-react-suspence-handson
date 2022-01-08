import { useState } from 'react';
import { fetchData1 } from '../libs/api';

export const DataLoader: React.VFC = () => {
  const [data, setData] = useState<string | null>(null);
  // dataがまだ無ければローディングを開始する
  if (data === null) {
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return <div>Data is {data}</div>;
};
