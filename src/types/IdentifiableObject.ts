import { z } from 'zod';

const IdentifiableObject = z.object({
	id: z.string().uuid(),
});

export default IdentifiableObject;
