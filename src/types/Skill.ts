import { z } from 'zod';
import { DndApiEntities } from './apiTypes';

namespace Skill {
	export enum ELevel {
		none = 0,
		proficiency = 1,
		expertise = 2,
	}

	export const skillLevelSchema = z.nativeEnum(ELevel);

	export const schema = z.object({
		name: z.string().nonempty(),
		level: skillLevelSchema,
		ability_score: z.string(),
	});

	export type Props = z.infer<typeof schema>;

	export const apiToCustom = ({
		name,
		ability_score,
	}: DndApiEntities.Skill.Props): Props => ({
		name,
		ability_score: ability_score.name,
		level: ELevel.none,
	});
}

export default Skill;
