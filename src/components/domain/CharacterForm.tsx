import { Input, Box, Select, Button, Heading } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import Character from '../../types/Character';
import FormFieldWrapper from '../reusable/FormFieldWrapper';

export type CharacterFormProps = {
	classes: string[];
	races: string[];
};

const CharacterForm = ({ classes, races }: CharacterFormProps): JSX.Element => {
	const formProps = useForm({
		resolver: zodResolver(
			Character.pick({ name: true, class: true, race: true })
		)
	});
	const [formValue, setFormValue] = useState<any>();

	return (
		<Box>
			<FormProvider {...formProps}>
				<form onSubmit={formProps.handleSubmit((d) => setFormValue(d))}>
					<FormFieldWrapper<z.infer<typeof Character>>
						registration={['name']}
						label="Name"
					>
						{(r) => <Input {...r} placeholder="Name" />}
					</FormFieldWrapper>
					<FormFieldWrapper<z.infer<typeof Character>>
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
					<FormFieldWrapper<z.infer<typeof Character>>
						registration={['race']}
						label="Class"
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
					<Button type="submit">Submit</Button>
				</form>
			</FormProvider>
			<Box>
				<Heading>Submitted Form Values</Heading>
				<Box>{JSON.stringify(formValue, null, 2)}</Box>
			</Box>
		</Box>
	);
};

export default CharacterForm;
