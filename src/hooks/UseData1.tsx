import { fetchData1 } from '../libs/api';

let data: string | undefined;

export const useData1 = (): string => {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData1().then((d) => (data = d));
  }
  return data;
}
