import { z } from 'zod';
import AbilityScore from './AbilityScore';
import IdentifiableObject from './IdentifiableObject';
import Skill from './Skill';

namespace Character {
	export const schema = IdentifiableObject.extend({
		name: z.string().nonempty({ message: 'Please provide a name' }),
		class: z.string().nonempty({ message: 'Please select a class' }),
		race: z.string(),
		skills: z.record(Skill.schema.shape.name, Skill.schema.shape.level),
		ability_scores: z.record(AbilityScore.name, AbilityScore.schema),
	});

	export type Props = z.infer<typeof schema>;
}

export default Character;
