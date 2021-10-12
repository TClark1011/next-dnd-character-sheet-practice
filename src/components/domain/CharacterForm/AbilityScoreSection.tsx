import { Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ABILITY_SCORE_NAMES } from '../../../config/constants';
import Character from '../../../types/Character';
import Columns from '../../reusable/Columns';
import Form from '../../reusable/Form';
import AbilityScoreFormRow from './AbilityScoreFormRow';

const AbilityScoreSection = (): JSX.Element => (
	// const { getValues } = useFormContext();

	// console.log('(AbilityScoreSection) getValues(): ', getValues());

	<Form<Character.Props['ability_scores']>
		handleSubmit={(d) => console.log(d)}
		resolver={zodResolver(Character.schema.shape.ability_scores)}
		reValidateMode="onChange"
	>
		<Columns
			columns={2}
			width="100%"
			justify="space-between"
			spaceBetweenItems={6}
		>
			{ABILITY_SCORE_NAMES.map((name) => (
				<AbilityScoreFormRow key={name} name={name} score={10} />
			))}
		</Columns>
		<Button type="submit">submit</Button>
	</Form>
);
export default AbilityScoreSection;
