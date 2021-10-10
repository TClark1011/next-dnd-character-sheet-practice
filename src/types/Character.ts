import { z } from 'zod';
import EAttribute from './EAttribute';
import IdentifiableObject from './IdentifiableObject';
import Skill from './Skill';

namespace Character {
	export const schema = IdentifiableObject.extend({
		name: z.string().nonempty({ message: 'Please provide a name' }),
		class: z.string().nonempty({ message: 'Please select a class' }),
		race: z.string(),
		skills: Skill.schema.array(),
		attributes: z.map(EAttribute, z.number().int().min(1)),
	});

	export type Props = z.infer<typeof schema>;
}

export default Character;
