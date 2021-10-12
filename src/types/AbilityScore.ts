import { z } from 'zod';
import { ABILITY_SCORE_NAMES } from '../config/constants';

namespace AbilityScore {
	export const name = z.enum(ABILITY_SCORE_NAMES);

	export const schema = z.number().int().min(1);
	// export const schema = z.any();

	export type Name = z.infer<typeof name>;
}

export default AbilityScore;
