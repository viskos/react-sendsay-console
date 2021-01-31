import React from 'react';
import Styled from './styled';

const { H1 } = Styled;

const Typography: React.FC<{ size: string }> = ({ size, children }) => (
	<H1 size={size}>{children}</H1>
);

export default Typography;
