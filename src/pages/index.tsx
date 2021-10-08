import { Center } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Page from '../components/reusable/Page';
import { fetchClasses, fetchRaces } from '../services/dndFetchers';
import CharacterForm, {
	CharacterFormProps
} from '../components/domain/CharacterForm';
import pickName from '../utils/pickName';

export type LandingPageProps = {
	formData: CharacterFormProps;
};

const LandingPage = ({ formData }: LandingPageProps): JSX.Element => (
	<Page as={Center}>
		<CharacterForm {...formData} />
	</Page>
);

export const getServerSideProps: GetServerSideProps<LandingPageProps> =
	async () => {
		const classes = await fetchClasses();
		const races = await fetchRaces();
		return {
			props: {
				formData: {
					classes: classes.map(pickName),
					races: races.map(pickName)
				}
			}
		};
	};

export default LandingPage;
