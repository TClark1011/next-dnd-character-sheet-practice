/* eslint-disable radar/prefer-immediate-return */
import { DndListFetcher, BaseDndObject, DndFetcher } from '../types/apiTypes';
import fetchDndData, { fetchDndDataList } from '../utils/fetchDndData';

export const fetchClasses: DndListFetcher = async () =>
	fetchDndDataList('classes/');

export const fetchRaces: DndListFetcher = async () =>
	fetchDndDataList('races/');

export const fetchSkills: DndListFetcher = async () =>
	fetchDndDataList('skills/');

export const fetchSpecificInfo: DndFetcher<[string | BaseDndObject.Props]> =
	async (item) =>
		fetchDndData(
			typeof item === 'string' ? item : BaseDndObject.schema.parse(item).url
		);

export const fetchFullSkills = async (): Promise<any> => {
	const minData = await fetchSkills();
	return Promise.all(minData.map(fetchSpecificInfo));
};
