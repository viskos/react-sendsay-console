import React from 'react';
import Styled from './styled';

type TTypographyProps = {
	size?: string;
	margin?: string;
	link?: string;
};

export const Typography: React.FC<TTypographyProps> = ({ size, margin, children, link }) => {
	const { StyledTypography, StyledLink } = Styled;

	if (link)
		return (
			<StyledLink href={link} margin={margin}>
				{children}
			</StyledLink>
		);

	return (
		<StyledTypography size={size!} margin={margin}>
			{children}
		</StyledTypography>
	);
};
