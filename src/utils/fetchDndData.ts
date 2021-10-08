import { DND_API_BASE_URL } from '../config/constants';
import { DndListFetcher, QueryListResult } from '../types/apiTypes';

const fetchDndData = async (addr: string): Promise<any> =>
	fetch(`${DND_API_BASE_URL}${addr}`).then((r) => r.json());

export const fetchDndDataList: DndListFetcher<[string]> = async (
	addr: string
) =>
	fetchDndData(addr)
		.then((d) => QueryListResult.parse(d))
		.then((d) => d.results);

export default fetchDndData;
