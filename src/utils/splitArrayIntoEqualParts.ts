import split from 'just-split';

const splitArrayIntoEqualParts = <ArrayElements>(
	arr: ArrayElements[],
	numberOfParts: number
): ArrayElements[][] => split(arr, Math.ceil(arr.length / numberOfParts));

export default splitArrayIntoEqualParts;
