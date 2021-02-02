import React, { useState } from 'react';
import Styled from './styled';
import { Typography } from '../../components';

export const DropdownItem: React.FC<{ isSuccess?: boolean }> = ({ isSuccess, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { StyledItem, Ring, Dots } = Styled;

	const handleDropdownToggle = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<StyledItem onClick={handleDropdownToggle}>
				<Ring isSuccess={isSuccess} />
				<Typography size="16" margin="0px 10px">
					{children}
				</Typography>
				<Dots />
			</StyledItem>
		</>
	);
};
