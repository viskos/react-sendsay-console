import React, { useEffect, useRef } from 'react';
import Styled from './styled';

type TScrollable = {
	_class?: string;
};

export const Scrollable: React.FC<TScrollable> = (props) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (el) {
			const onWheel = (e: any) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 4,
					behavior: 'smooth',
				});
			};

			el.addEventListener('wheel', onWheel);

			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	const { ScrollableWrapper } = Styled;

	return (
		<ScrollableWrapper ref={ref}>
			{React.Children.map(props.children, (child) => React.Children.only(child))}
		</ScrollableWrapper>
	);
};
