import React, { useEffect, useState } from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import { Typography } from '../Typography/Typography';
import Styled from './styled';
import './style.css';

type TSplitConsoleProps = {
	onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	value: string;
	isInvalid: boolean;
	response?: any;
	isError?: boolean;
};

export const SplitConsole: React.FC<TSplitConsoleProps> = ({
	onChange,
	value,
	isInvalid,
	response,
	isError,
}) => {
	const [paneSize, setPaneSize] = useState<number>(window.innerWidth / 2);

	useEffect(() => {
		if (localStorage.getItem('pane_size')) {
			setPaneSize(Number(localStorage.getItem('pane_size')));
		}
	}, [paneSize]);

	const handleResize = (e: number) => {
		const size = String(e);
		localStorage.setItem('pane_size', size);
	};

	const { StyledTextArea, PaneWrapper } = Styled;

	return (
		<SplitPane
			className="SplitPane"
			split="vertical"
			minSize={50}
			defaultSize={paneSize}
			onChange={handleResize}
		>
			<PaneWrapper>
				<Typography size="12">Запрос:</Typography>
				<Pane className="pane">
					<StyledTextArea value={value} onChange={onChange} isInvalid={isInvalid} />
				</Pane>
			</PaneWrapper>

			<PaneWrapper>
				<Typography size="12">Ответ:</Typography>
				<Pane className="pane">
					<StyledTextArea isError={isError} value={JSON.stringify(response, undefined, 2)} />
				</Pane>
			</PaneWrapper>
		</SplitPane>
	);
};
