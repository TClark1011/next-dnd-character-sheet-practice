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
};

const Form = <Fields extends FieldValues>({
	children,
	handleSubmit,
	...props
}: FormProps<Fields>): JSX.Element => {
	const formProps = useForm<Fields>(props);

	return (
		<FormProvider {...formProps}>
			<form onSubmit={formProps.handleSubmit(handleSubmit)}>{children}</form>
		</FormProvider>
	);
};

export default Form;
