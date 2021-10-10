import { assign, createMachine } from 'xstate';
import { z } from 'zod';
import { FormProgress } from '../types/FormProgress';

const formProgressMachine = createMachine<
	z.infer<typeof FormProgress.Context>,
	z.infer<typeof FormProgress.Event>
>(
	{
		context: {
			page: 0,
		},
		initial: FormProgress.EStates.inProgress,
		states: {
			[FormProgress.EStates.inProgress]: {
				on: {
					[FormProgress.EEventNames.nextPage]: {
						actions: 'nextPage',
					},
				},
			},
		},
	},
	{
		actions: {
			nextPage: assign({
				page: (ctx, e) => FormProgress.Events.NextPage.parse(e) && ctx.page + 1,
			}),
			prevPage: assign({
				page: (ctx, e) => FormProgress.Events.PrevPage.parse(e) && ctx.page - 1,
			}),
		},
	}
);

export default formProgressMachine;
