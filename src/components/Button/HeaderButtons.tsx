import React from 'react';
import Styled from './styled';

type TLogoutBtn = {
	onClick?: () => void;
	title?: string;
	disabled?: boolean;
	type: string;
	fullscreen?: boolean;
};

export const HeaderButtons: React.FC<TLogoutBtn> = ({
	type,
	onClick,
	title,
	disabled,
	fullscreen,
}) => {
	const { LogoutButton, FullScreenButton, ClearHistoryButton, FormatButton } = Styled;

	const renderContent = () => {
		if (type === 'logout') return <LogoutButton onClick={onClick}>{title}</LogoutButton>;
		if (type === 'fullscreen')
			return <FullScreenButton onClick={onClick} fullscreen={fullscreen}></FullScreenButton>;
		if (type === 'clear-history')
			return <ClearHistoryButton onClick={onClick}></ClearHistoryButton>;
		if (type === 'format')
			return (
				<FormatButton onClick={onClick} disabled={disabled}>
					Форматировать
				</FormatButton>
			);
		return null;
	};

	return renderContent();
};
