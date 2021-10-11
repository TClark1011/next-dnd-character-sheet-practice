import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Switch, HStack, StackProps } from '@chakra-ui/react';

const ColorModeToggleSwitch = (
	props: Omit<StackProps, 'onClick' | 'children' | 'onChange'>
): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack {...props}>
			<SunIcon />
			<Switch
				onChange={toggleColorMode}
				isChecked={colorMode === 'dark'}
				colorScheme="whiteAlpha"
			/>
			<MoonIcon />
		</HStack>
	);
};

export default ColorModeToggleSwitch;
