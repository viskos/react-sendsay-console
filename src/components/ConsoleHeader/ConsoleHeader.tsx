import React from 'react';
import Styled from './styled';

type TConsoleHeader = {
	item: string;
};

const { HeaderWrapper, HeaderItem, UserData } = Styled;

export const ConsoleHeader: React.FC<TConsoleHeader> = ({ item, children }) => {
	const renderContent = () => {
		if (item === 'wrapper') return <HeaderWrapper>{children}</HeaderWrapper>;
		if (item === 'wrapper-item') return <HeaderItem>{children}</HeaderItem>;
		if (item === 'user-data') return <UserData>{children}</UserData>;
		return null;
	};

	return renderContent();
};
