import {
	Box,
	Center,
	Tag,
	useColorModeValue,
	NumberInput,
	NumberInputField
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import getAbilityScoreModifier from '../../../utils/getAbilityScoreModifier';
import useColorModeValueToken from '../../../utils/useColorModeValueToken';
import useInputState from '../../../utils/useInputState';
import NumberWithPrefixSymbol, {
	Prefix,
	Number
} from '../../reusable/NumberWithSymbolPrefix';

const AbilityScoreInput = ({ name }: { name: string }): JSX.Element => {
	const modifierBg = useColorModeValue('gray.200', 'darkBorder');
	const focusedColor = useColorModeValueToken('color', 'blue.500', 'blue.300');
	const { register } = useFormContext();
	const [inputValue, inputOnChange] = useInputState(10);

	return (
		<Box
			position="relative"
			_focusWithin={{
				'.tag': {
					backgroundColor: focusedColor
				}
			}}
		>
			<NumberInput>
				<NumberInputField
					boxSize={16}
					textAlign="center"
					padding={0}
					{...register(name, { onChange: inputOnChange })}
				/>
			</NumberInput>

			<Center position="absolute" width="100%" bottom={-3}>
				<Tag
					as={Center}
					width={8}
					marginTop={4}
					backgroundColor={modifierBg}
					zIndex={1}
					height={6}
					className="tag"
				>
					<NumberWithPrefixSymbol number={getAbilityScoreModifier(inputValue)}>
						<Prefix />
						<Number />
					</NumberWithPrefixSymbol>
				</Tag>
			</Center>
		</Box>
	);
};

export default AbilityScoreInput;
