import { z } from 'zod';
import { DndApiEntities } from './apiTypes';

namespace Skill {
	export const schema = z.object({
		name: z.string().nonempty(),
		proficiency: z.boolean().default(false),
		expertise: z.boolean().default(false),
		ability_score: z.string(),
	});

	export const apiToCustom = ({
		name,
		ability_score,
	}: DndApiEntities.Skill.Props): Props => ({
		name,
		ability_score: ability_score.name,
		expertise: false,
		proficiency: false,
	});

	export type Props = z.infer<typeof schema>;
}

export default Skill;
