import { TextProps, Text } from '@chakra-ui/react';
import { createContext, useContext } from 'react';
import run from '../../utils/run';

export type NumberWithPrefixSymbolProps = {
	number: number;
};

export type NumberWithPrefixContextProps = {
	number: string;
	prefix: string;
};

const NumberWithPrefixContext = createContext<NumberWithPrefixContextProps>({
	number: '',
	prefix: ''
});

export const useNumberWithPrefix = (): NumberWithPrefixContextProps =>
	useContext(NumberWithPrefixContext);

const NumberWithPrefixSymbol: React.FC<NumberWithPrefixSymbolProps> = ({
	number,
	children
}) => {
	const prefix = run<string>(() => {
		if (number > 0) {
			return '+';
		}
		if (number < 0) {
			return '-';
		}
		return '';
	});
	return (
		<NumberWithPrefixContext.Provider
			value={{
				number: `${Math.abs(number)}`,
				prefix
			}}
		>
			{children}
		</NumberWithPrefixContext.Provider>
	);
};

export const Prefix = (props: Omit<TextProps, 'children'>): JSX.Element => {
	const { prefix } = useNumberWithPrefix();
	return <Text {...props}>{prefix}</Text>;
};

export const Number = (props: Omit<TextProps, 'children'>): JSX.Element => {
	const { number } = useNumberWithPrefix();
	return <Text {...props}>{number}</Text>;
};

export default NumberWithPrefixSymbol;
