import { z } from 'zod';
import IdentifiableObject from './IdentifiableObject';

namespace Skill {
	export const schema = IdentifiableObject.extend({
		name: z.string().min(1),
		proficiency: z.boolean(),
		expertise: z.boolean(),
	});

	export type Props = z.infer<typeof schema>;
}

export default Skill;
