import React, { useState } from 'react';
import Styled from './styled';
import { Typography } from '../../components';

type TDropdownItem = {
	isSuccess?: boolean;
	handleDelete: () => void;
	handleCopy: () => void;
	handleReRequest: () => void;
};

export const DropdownItem: React.FC<TDropdownItem> = ({
	isSuccess,
	handleDelete,
	handleCopy,
	handleReRequest,
	children,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleDropdownToggle = (): void => {
		setIsOpen(!isOpen);
	};

	const chooseDropdownItem = (): void => {
		setIsOpen(!isOpen);
	};

	const { StyledItem, Ring, Dots, DropdownBody, DropdownItem } = Styled;

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
				<DropdownItem
					onClick={() => {
						handleReRequest();
						chooseDropdownItem();
					}}
				>
					Выполнить
				</DropdownItem>
				<DropdownItem
					onClick={() => {
						chooseDropdownItem();
						handleCopy();
					}}
				>
					Скопировать
				</DropdownItem>
				<DropdownItem
					onClick={() => {
						chooseDropdownItem();
						handleDelete();
					}}
					destructive
				>
					Удалить
				</DropdownItem>
			</DropdownBody>
		</div>
	);
};
