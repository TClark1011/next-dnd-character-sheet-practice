import { assign, createMachine } from 'xstate';
import { z } from 'zod';
import { FormProgress } from '../types/FormProgress';

const formProgressMachine = createMachine<
	FormProgress.Context.Props,
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
					[FormProgress.EEventNames.nextPage]:
						FormProgress.EEventNames.nextPage,
				},
			},
		},
	},
	{
		actions: {
			[FormProgress.EEventNames.nextPage]: assign({
				page: (ctx, e) => FormProgress.Events.NextPage.parse(e) && ctx.page + 1,
			}),
			[FormProgress.EEventNames.prevPage]: assign({
				page: (ctx, e) => FormProgress.Events.PrevPage.parse(e) && ctx.page - 1,
			}),
		},
	}
);

export default formProgressMachine;
