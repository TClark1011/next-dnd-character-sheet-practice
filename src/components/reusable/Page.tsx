import { Box, BoxProps } from '@chakra-ui/react';
import ColorModeToggleSwitch from '../domain/ColorModeToggleSwitch';

const Page: React.FC<BoxProps> = ({ children, ...props }) => (
	<Box width="100%" minHeight="100vh" {...props} position="relative">
		<ColorModeToggleSwitch position="absolute" top={6} right={8} />
		{children}
	</Box>
);

export default Page;
