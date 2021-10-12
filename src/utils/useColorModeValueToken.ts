import { useToken, useColorModeValue } from '@chakra-ui/react';

const useColorModeValueToken = (
	token: string,
	lightModeSelector: string,
	darkModeSelector: string,
	lightModeFallback?: string,
	darkModeFallback?: string
): string => {
	const lightModeValue = useToken(token, lightModeSelector, lightModeFallback);
	const darkModeValue = useToken(
		token,
		darkModeSelector,
		darkModeFallback || lightModeFallback
	);
	return useColorModeValue(lightModeValue, darkModeValue);
};

export default useColorModeValueToken;
