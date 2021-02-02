import React from 'react';
import Styled from './styled';

export const Dropdown: React.FC = ({ children }) => {
	const { DropdownWrapper } = Styled;
	return <DropdownWrapper>{children}</DropdownWrapper>;
};
