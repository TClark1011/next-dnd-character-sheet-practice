import { Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormContext } from 'react-hook-form';
import Character from '../../../types/Character';
import Skill from '../../../types/Skill';
import Columns from '../../reusable/Columns';
import Form from '../../reusable/Form';
import SkillFormRow from './SkillFormRow';

export type SkillSectionProps = {
	skills: Skill.Props[];
	columns?: number;
};

const SkillSection = ({
	skills,
	columns = 2
}: SkillSectionProps): JSX.Element => {
	useFormContext();

	return (
		<Form<Character.Props['skills']>
			handleSubmit={(d) => console.log(d)}
			resolver={zodResolver(Character.schema.shape.skills)}
		>
			<Columns columns={columns} width="100%" justifyContent="space-between">
				{skills.map((skill) => (
					<SkillFormRow {...skill} key={skill.name} />
				))}
			</Columns>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default SkillSection;
