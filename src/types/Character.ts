import { z } from 'zod';
import EAttribute from './EAttribute';
import IdentifiableObject from './IdentifiableObject';
import Skill from './Skill';

const Character = IdentifiableObject.extend({
	name: z.string().nonempty({ message: 'Please provide a name' }),
	class: z.string(),
	race: z.string(),
	skills: Skill.array(),
	attributes: z.map(EAttribute, z.number().int().min(1)),
});

export default Character;
