import { z, ZodSchema } from 'zod';

namespace StateEvent {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	export const schema = <Schema extends ZodSchema<any> = ZodSchema<any>>(
		name: string,
		payload?: Schema
	) =>
		z.object({
			type: z.literal(name),
			...(payload ? { payload } : {}),
		});

	export type Props<Type extends string, Payload = any> = {
		type: Type;
		payload: Payload;
	};
}

export default StateEvent;
