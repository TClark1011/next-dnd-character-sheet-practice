import { Checkbox, HStack, Text } from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';
import Character from '../../../types/Character';
import Skill from '../../../types/Skill';

const SkillFormRow = ({ name, level }: Skill.Props): JSX.Element => {
	const fieldController = useController<Character.Props['skills']>({
		name,
		defaultValue: level
	});

	const { setValue } = useFormContext<Character.Props['skills']>();

	const hasProficiency =
		fieldController.field.value >= Skill.ELevel.proficiency;
	const hasExpertise = fieldController.field.value >= Skill.ELevel.expertise;

	return (
		<HStack spacing={2}>
			<HStack spacing={2}>
				<Checkbox
					isChecked={hasProficiency}
					onChange={() => setValue(name, hasProficiency ? 0 : 1)}
				/>
				<Checkbox
					isDisabled={!hasProficiency}
					isChecked={hasExpertise}
					onChange={() => setValue(name, hasExpertise ? 1 : 2)}
				/>
			</HStack>
			<Text>{name}</Text>
		</HStack>
	);
};

export default SkillFormRow;
