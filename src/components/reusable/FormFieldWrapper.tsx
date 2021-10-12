import {
	FormControl,
	FormControlProps,
	FormHelperText,
	FormLabel,
	FormErrorMessage
} from '@chakra-ui/react';
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
		noExtras?: boolean;
	}) &
		(
			| {
					children: JSX.Element;
					registration?: never;
			  }
			| {
					children: (
						p1: UseFormRegisterReturn,
						p2: { errorMessage?: string; helperText?: string; label?: string }
					) => JSX.Element;
					registration: Parameters<UseFormRegister<FieldProps>>;
			  }
		);

const FormFieldWrapper = <FieldProps extends FieldValues>({
	label,
	helperText,
	children,
	registration,
	noExtras = false,
	...props
}: React.PropsWithChildren<FormFieldWrapperProps<FieldProps>>): JSX.Element => {
	const {
		register,
		formState: { errors }
	} = useFormContext();

	const formControlProps = registration
		? {
				isInvalid: errors[registration[0]]
		  }
		: {};
	const formLabelProps = registration
		? {
				htmlFor: registration[0]
		  }
		: {};

	return (
		<FormControl {...formControlProps} {...props}>
			{!noExtras && label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
			{typeof children === 'function' && registration
				? children(register(...registration), {
						errorMessage: errors[registration[0]]?.message || '',
						label,
						helperText
				  })
				: children}
			{!noExtras && helperText && <FormHelperText>{helperText}</FormHelperText>}
			{!noExtras && registration && errors[registration[0]]?.message && (
				<FormErrorMessage>{errors[registration[0]].message}</FormErrorMessage>
			)}
		</FormControl>
	);
};
export default FormFieldWrapper;
