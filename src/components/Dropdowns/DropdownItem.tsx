import React, { useState } from 'react';
import Styled from './styled';
import { Typography } from '../../components';

export const DropdownItem: React.FC<{ isSuccess?: boolean }> = ({ isSuccess, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { StyledItem, Ring, Dots, DropdownBody, DropdownItem } = Styled;

	const handleDropdownToggle = (): void => {
		setIsOpen(!isOpen);
	};

	const chooseDropdownItem = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<StyledItem onClick={handleDropdownToggle}>
				<Ring isSuccess={isSuccess} />
				<Typography size="16" margin="0px 10px">
					{children}
				</Typography>
				<Dots />
			</StyledItem>
			<DropdownBody isShow={isOpen}>
				<DropdownItem onClick={chooseDropdownItem}>Выполнить</DropdownItem>
				<DropdownItem onClick={chooseDropdownItem}>Скопировать</DropdownItem>
				<DropdownItem onClick={chooseDropdownItem} destructive>
					Удалить
				</DropdownItem>
			</DropdownBody>
		</div>
	);
};
