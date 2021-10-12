import { HStack, Text, Box, FormErrorMessage, VStack } from '@chakra-ui/react';
import React from 'react';
import AbilityScore from '../../../types/AbilityScore';
import Character from '../../../types/Character';
import FormFieldWrapper from '../../reusable/FormFieldWrapper';
import AbilityScoreInput from './AbilityScoreInput';

export type AbilityScoreFormRowProps = {
	name: AbilityScore.Name;
	score: number;
};

const AbilityScoreFormRow = ({
	name
}: AbilityScoreFormRowProps): JSX.Element => (
	<FormFieldWrapper<Character.Props['ability_scores']>
		registration={[name, { valueAsNumber: true, value: 10 }]}
		noExtras
	>
		{(_, { errorMessage }) => (
			<HStack>
				<AbilityScoreInput name={name} />
				<VStack alignItems="flex-start">
					<Text>{name}</Text>
					{errorMessage ? (
						<FormErrorMessage height={2}>{errorMessage}</FormErrorMessage>
					) : (
						<Box height={2} />
					)}
				</VStack>
			</HStack>
		)}
	</FormFieldWrapper>
);

export default AbilityScoreFormRow;
