import { useFormContext, UseFormReturn } from 'react-hook-form';
import Character from '../../../types/Character';
import FormFieldWrapper, {
	FormFieldWrapperProps
} from '../../reusable/FormFieldWrapper';

export const CharacterFormFieldWrapper = (
	props: FormFieldWrapperProps<Character.Props>
): ReturnType<typeof FormFieldWrapper> => <FormFieldWrapper {...props} />;

export const useCharacterFormContext = (): UseFormReturn<Character.Props> =>
	useFormContext<Character.Props>();

export const CharacterFormAbilityScoresFieldWrapper = (
	props: FormFieldWrapperProps<Character.Props['ability_scores']>
): ReturnType<typeof FormFieldWrapper> => <FormFieldWrapper {...props} />;

export const useCharacterFormAbilityScoresContext = (): UseFormReturn<
	Character.Props['ability_scores']
> => useFormContext<Character.Props['ability_scores']>();
