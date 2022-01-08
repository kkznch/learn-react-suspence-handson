import { fetchData1 } from '../libs/api';

let data: string | undefined;

export const DataLoader: React.VFC = () => {
  // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData1().then(d => data = d);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
