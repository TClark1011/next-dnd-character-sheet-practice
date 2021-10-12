import { useColorModeValue, ColorHues } from '@chakra-ui/react';

const useAdaptiveColorShade = (
	color: string,
	shade: (keyof ColorHues & 50) | 100 | 200 | 300 | 400 | 500
): string =>
	useColorModeValue(
		`${color}.${shade}`,
		`${color}.${shade === 50 ? 900 : Math.max(900 - shade, 50)}`
	);

export default useAdaptiveColorShade;
