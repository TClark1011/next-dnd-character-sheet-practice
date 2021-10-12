import { ChangeEvent, useState } from 'react';

const useInputState = <Type extends string | number = string>(
	startingValue: Type
): [Type, (e: ChangeEvent<HTMLInputElement>) => void] => {
	const [state, setState] = useState(startingValue);
	return [state, (e) => setState(e.target.value as any)];
};

export default useInputState;
