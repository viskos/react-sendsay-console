import React from 'react';
import Styled from './styled';

type TLogoutBtn = {
	onClick?: () => void;
	title?: string;
	type: string;
};

export const HeaderButtons: React.FC<TLogoutBtn> = ({ type, onClick, title }) => {
	const { LogoutButton, FullScreenButton, ClearHistoryButton } = Styled;

	const renderContent = () => {
		if (type === 'logout') return <LogoutButton onClick={onClick}>{title}</LogoutButton>;
		if (type === 'fullscreen') return <FullScreenButton onClick={onClick}></FullScreenButton>;
		if (type === 'clear-history')
			return <ClearHistoryButton onClick={onClick}></ClearHistoryButton>;
		return null;
	};

	return renderContent();
};
