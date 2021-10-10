import { z } from 'zod';
import Character from './Character';
import StateEvent from './StateEvent';

export namespace FormProgress {
	const PageNumber = z.number().min(0);

	export const Context = z.object({
		page: PageNumber,
	});

	export enum EStates {
		inProgress = 'in-progress',
		finished = 'finished',
	}

	export enum EEventNames {
		nextPage = 'nextPage',
		prevPage = 'prevPage',
		submit = 'submit',
	}

	export namespace Events {
		export const NextPage = StateEvent.schema(EEventNames.nextPage);
		export const PrevPage = StateEvent.schema(EEventNames.prevPage);

		export const Submit = StateEvent.schema(
			EEventNames.submit,
			Character.schema
		);
	}
	export const Event = Events.Submit.or(Events.PrevPage).or(Events.NextPage);
}
