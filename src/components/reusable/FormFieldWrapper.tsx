import {
	FormControl,
	FormControlProps,
	FormHelperText,
	FormLabel,
	FormLabelProps,
	FormErrorMessage
} from '@chakra-ui/react';
import { useCallback } from 'react';
import {
	FieldValues,
	useFormContext,
	UseFormRegister,
	UseFormRegisterReturn
} from 'react-hook-form';

export type FormFieldWrapperProps<FieldProps extends FieldValues = any> =
	(FormControlProps & {
		label?: string;
		helperText?: string;
		errorMessage?: string;
	}) &
		(
			| {
					children: JSX.Element;
					registration?: never;
			  }
			| {
					children: (p: UseFormRegisterReturn) => JSX.Element;
					registration: Parameters<UseFormRegister<FieldProps>>;
			  }
		);

const FormFieldWrapper = <FieldProps extends FieldValues>({
	label,
	helperText,
	children,
	registration,
	...props
}: React.PropsWithChildren<FormFieldWrapperProps<FieldProps>>): JSX.Element => {
	const {
		register,
		formState: { errors }
	} = useFormContext();

	const getRegistrationDependantProps = useCallback(
		<T extends {}>(dependantProps: Partial<T>) =>
			registration ? dependantProps : {},
		[registration]
	);

	const formControlProps = getRegistrationDependantProps<FormControlProps>({
		isInvalid: errors[registration[0]]
	});
	const formLabelProps = getRegistrationDependantProps<FormLabelProps>({
		htmlFor: registration[0]
	});

	return (
		<FormControl {...formControlProps} {...props}>
			{label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
			{typeof children === 'function'
				? children(register(...registration))
				: children}
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
			{registration && errors[registration[0]]?.message && (
				<FormErrorMessage>{errors[registration[0]].message}</FormErrorMessage>
			)}
		</FormControl>
	);
};
export default FormFieldWrapper;
