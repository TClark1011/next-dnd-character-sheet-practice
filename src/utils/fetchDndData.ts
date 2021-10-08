import { DndListFetcher, QueryListResult } from '../types/apiTypes';

const fetchDndData = async (addr: string): Promise<any> =>
	fetch(`https://www.dnd5eapi.co/api/${addr}`).then((r) => r.json());

export const fetchDndDataList: DndListFetcher = async (addr: string) =>
	fetchDndData(addr).then((d) => QueryListResult.parse(d));

export default fetchDndData;
