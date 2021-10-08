import { DndListFetcher } from '../types/apiTypes';
import { fetchDndDataList } from '../utils/fetchDndData';

export const fetchClasses: DndListFetcher = async () =>
	fetchDndDataList('classes/');

export const fetchRaces: DndListFetcher = async () =>
	fetchDndDataList('races/');
