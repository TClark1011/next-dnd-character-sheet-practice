import { Input, Box, Select, Button, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchFullSkills } from '../../../services/dndFetchers';
import Character from '../../../types/Character';
import Skill from '../../../types/Skill';
import Form from '../../reusable/Form';
import FormFieldWrapper from '../../reusable/FormFieldWrapper';
import AbilityScoreSection from './AbilityScoreSection';
import SkillSection from './SkillSection';

export type CharacterFormProps = {
	classes: string[];
	races: string[];
};

const CharacterForm = ({ classes, races }: CharacterFormProps): JSX.Element => {
	const [formValue, setFormValue] = useState<any>();

	const skills = useQuery('skills', fetchFullSkills);

	return (
		<Box>
			{/* <Form handleSubmit={setFormValue}>
				<Stack spacing={6}>
					<FormFieldWrapper<Character.Props>
						registration={['name']}
						label="Name"
					>
						{(r) => <Input {...r} placeholder="Name" />}
					</FormFieldWrapper>
					<FormFieldWrapper<Character.Props>
						registration={['class']}
						label="Class"
					>
						{(r) => (
							<Select {...r} placeholder="Select Class">
								{classes.map((c) => (
									<option value={c} key={c}>
										{c}
									</option>
								))}
							</Select>
						)}
					</FormFieldWrapper>
					<FormFieldWrapper<Character.Props>
						registration={['race']}
						label="Race"
					>
						{(r) => (
							<Select {...r} placeholder="Select Race">
								{races.map((race) => (
									<option value={race} key={race}>
										{race}
									</option>
								))}
							</Select>
						)}
					</FormFieldWrapper>
					{skills.data && (
						<SkillSection skills={skills.data.map(Skill.apiToCustom)} />
					)}
					<Button type="submit">Submit</Button>
				</Stack>
			</Form> */}
			<AbilityScoreSection />
			<Box>
				<Heading>Submitted Form Values</Heading>
				<Box>{JSON.stringify(formValue, null, 2)}</Box>
			</Box>
		</Box>
	);
};

export default CharacterForm;
