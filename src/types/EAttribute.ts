import { z } from 'zod';

const EAttribute = z.enum([
	'Strength',
	'Dexterity',
	'Intelligence',
	'Wisdom',
	'Constitution',
	'Charisma',
]);

export default EAttribute;
