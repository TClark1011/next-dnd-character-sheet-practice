import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
	styles: {
		global: (props: any) => ({
			'*, *::before, &::after': {
				borderColor: mode('gray.200', 'darkBorder')(props),
				wordWrap: 'break-word',
			},
		}),
	},
	colors: {
		...defaultTheme.colors,
		darkBorder: 'rgb(63,68,78)',
	},
});

export default theme;
