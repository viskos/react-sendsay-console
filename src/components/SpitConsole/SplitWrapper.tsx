import React from 'react';
import Styled from './styled';

const { SplitConsoleWrapper } = Styled;

export const SplitWrapper: React.FC = ({ children }) => (
	<SplitConsoleWrapper>{children}</SplitConsoleWrapper>
);
