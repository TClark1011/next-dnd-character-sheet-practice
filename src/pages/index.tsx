import { Center, Input, Button, Box, Heading } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import FormFieldWrapper from '../components/reusable/FormFieldWrapper';
import Page from '../components/reusable/Page';
import Character from '../types/Character';

const Index: React.FC = () => {
	const formProps = useForm({
		resolver: zodResolver(Character.pick({ name: true }))
	});
	const [formValue, setFormValue] = useState<any>();
	return (
		<Page as={Center}>
			<Box>
				<FormProvider {...formProps}>
					<form onSubmit={formProps.handleSubmit((d) => setFormValue(d))}>
						<FormFieldWrapper<z.infer<typeof Character>>
							registration={['name']}
							label="Name"
						>
							{(r) => <Input {...r} />}
						</FormFieldWrapper>
						<Button type="submit">Submit</Button>
					</form>
				</FormProvider>
				<Box>
					<Heading>Submitted Form Values</Heading>
					<Box>{JSON.stringify(formValue, null, 2)}</Box>
				</Box>
			</Box>
		</Page>
	);
};

export default Index;
