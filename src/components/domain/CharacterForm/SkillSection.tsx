import { Box } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import Skill from '../../../types/Skill';
import Columns from '../../reusable/Columns';
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
		<Box>
			<Columns columns={columns} width="100%" justifyContent="space-between">
				{skills.map((skill) => (
					<SkillFormRow {...skill} key={skill.name} />
				))}
			</Columns>
		</Box>
	);
};

export default SkillSection;
