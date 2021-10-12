import { z } from 'zod';

export namespace BaseDndObject {
	export const schema = z.object({
		index: z.string().nonempty(),
		name: z.string().nonempty(),
		url: z
			.string()
			.nonempty()
			.transform((s) => s.replace('api/', '')),
	});

	export type Props = z.infer<typeof schema>;
}

export const QueryListResult = z.object({
	count: z.number().min(1),
	results: z.array(BaseDndObject.schema),
});

export namespace DndApiEntities {
	export namespace Class {
		export const schema = BaseDndObject.schema.extend({
			hitDie: z.number().min(1),
			proficiency_choices: z.array(z.any()),
			proficiencies: z.array(z.any()),
			saving_throws: z.array(z.any()),
			starting_equipment: z.any(),
			class_levels: z.any(),
			multi_classing: z.any(),
			subclasses: z.array(z.any()),
			spellcasting: z.any(),
			spells: z.string(),
			url: z.string().url(),
		});

		export type Props = z.infer<typeof schema>;
	}

	export namespace Skill {
		export const schema = BaseDndObject.schema.extend({
			desc: z.string().array(),
			ability_score: BaseDndObject.schema,
		});

		export type Props = z.infer<typeof schema>;
	}
}

export type DndFetcher<
	Params extends any[] = [],
	ReturnType extends {} = {}
> = (...p: Params) => Promise<ReturnType>;

export type DndListFetcher<Params extends any[] = []> = DndFetcher<
	Params,
	BaseDndObject.Props[]
>;
