import { Box, StyleProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
	UseFormProps
} from 'react-hook-form';

type FormProps<Fields extends FieldValues> = PropsWithChildren<
	UseFormProps<Fields>
> & {
	handleSubmit: SubmitHandler<Fields>;
	styleProps?: StyleProps;
};

const Form = <Fields extends FieldValues>({
	children,
	handleSubmit,
	styleProps = {},
	...props
}: FormProps<Fields>): JSX.Element => {
	const formProps = useForm<Fields>(props);

	return (
		<FormProvider {...formProps}>
			<Box
				as="form"
				{...styleProps}
				onSubmit={formProps.handleSubmit(handleSubmit)}
			>
				{children}
			</Box>
		</FormProvider>
	);
};

export default Form;
