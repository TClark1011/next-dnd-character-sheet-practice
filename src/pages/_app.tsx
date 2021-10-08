import { AppProps } from 'next/app';
import Providers from '../components/domain/Providers';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<Providers>
		<Component {...pageProps} />
	</Providers>
);

export default MyApp;
