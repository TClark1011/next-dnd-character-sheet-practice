import { DndListFetcher } from '../types/apiTypes';
import { fetchDndDataList } from '../utils/fetchDndData';

export const fetchClasses: DndListFetcher = async () =>
	fetchDndDataList('classes');

export const fetchSpells: DndListFetcher = async () =>
	fetchDndDataList('spells');
