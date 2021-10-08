import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';

const Providers: React.FC = ({ children }) => (
	<ChakraProvider resetCSS theme={theme}>
		{children}
	</ChakraProvider>
);

export default Providers;
