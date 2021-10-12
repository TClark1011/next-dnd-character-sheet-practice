import { Checkbox, HStack, Text, useBoolean } from '@chakra-ui/react';
import Skill from '../../../types/Skill';

const SkillFormRow = ({ name }: Skill.Props): JSX.Element => {
	const [hasProf, setHasProf] = useBoolean(false);
	const [hasExp, setHasExp] = useBoolean(false);

	return (
		<HStack spacing={2}>
			<HStack spacing={2}>
				<Checkbox isChecked={hasProf} onChange={setHasProf.toggle} />
				<Checkbox
					isDisabled={!hasProf}
					isChecked={hasExp && hasProf}
					onChange={setHasExp.toggle}
				/>
			</HStack>
			<Text>{name}</Text>
		</HStack>
	);
};

export default SkillFormRow;
