import { z } from 'zod';

export const BaseDndObject = z.object({
	index: z.string().nonempty(),
	name: z.string().nonempty(),
	url: z.string().nonempty(),
});

export const QueryListResult = z.object({
	count: z.number().min(1),
	results: z.array(BaseDndObject),
});

export namespace DndApiEntities {
	export const Class = BaseDndObject.extend({
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
}

export type DndListFetcher<Params extends any[] = []> = (
	...p: Params
) => Promise<z.infer<typeof BaseDndObject>[]>;
