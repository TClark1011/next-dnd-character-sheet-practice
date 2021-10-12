const getAbilityScoreModifier = (score: number): number =>
	Math.floor((score - 10) / 2);

export default getAbilityScoreModifier;
