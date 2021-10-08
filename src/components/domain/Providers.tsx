import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../../config/theme';

const Providers: React.FC = ({ children }) => (
	<QueryClientProvider client={new QueryClient()}>
		<ChakraProvider resetCSS theme={theme}>
			{children}
		</ChakraProvider>
	</QueryClientProvider>
);

export default Providers;
