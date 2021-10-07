import { z } from 'zod';
import IdentifiableObject from './IdentifiableObject';

const Skill = IdentifiableObject.extend({
	name: z.string().min(1),
	proficiency: z.boolean(),
	expertise: z.boolean(),
});

export default Skill;
