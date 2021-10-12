/* eslint-disable react/no-array-index-key */
import { StackProps, HStack, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import splitArrayIntoEqualParts from '../../utils/splitArrayIntoEqualParts';

export type ColumnsProps = StackProps & {
	columns: number;
	children: JSX.Element[];
	topOfEachColumn?: JSX.Element;
	spaceBetweenItems?: number;
	spaceBetweenColumns?: number;
	columnProps?: Partial<StackProps>;
};

const Columns = ({
	columns,
	topOfEachColumn,
	children,
	spaceBetweenItems = 0,
	spaceBetweenColumns = 0,
	columnProps,
	...props
}: ColumnsProps): JSX.Element => {
	const childrenInColumns = splitArrayIntoEqualParts(children, columns);

	return (
		<HStack spacing={spaceBetweenColumns} {...props}>
			{childrenInColumns.map((colItems, colIndex) => (
				<VStack
					key={colIndex}
					spacing={spaceBetweenItems}
					align="flex-start"
					{...columnProps}
				>
					{topOfEachColumn}
					{colItems.map((item, index) => (
						<Fragment key={index}>{item}</Fragment>
					))}
				</VStack>
			))}
		</HStack>
	);
};

export default Columns;
