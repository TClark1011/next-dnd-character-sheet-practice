import { Box, BoxProps } from '@chakra-ui/react';

const Page: React.FC<BoxProps> = ({ children, ...props }) => (
	<Box width="100%" minHeight="100vh" {...props}>
		{children}
	</Box>
);

export default Page;
