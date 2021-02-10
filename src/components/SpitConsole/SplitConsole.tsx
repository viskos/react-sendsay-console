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

	const { StyledTextArea } = Styled;

	return (
		<SplitPane
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				padding: '0px 15px 15px 15px',
			}}
			split="vertical"
			minSize={50}
			defaultSize={paneSize}
			onChange={handleResize}
		>
			<div
				style={{
					padding: '15px 0 15px 0',
					position: 'absolute',
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
					height: '100%',
				}}
			>
				<Typography size="12">Запрос:</Typography>
				<Pane style={{ height: '100%' }}>
					<StyledTextArea value={value} onChange={onChange} isInvalid={isInvalid} />
				</Pane>
			</div>

			<div
				style={{
					padding: '15px 0 15px 0',
					position: 'absolute',
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
					height: '100%',
				}}
			>
				<Typography size="12">Ответ:</Typography>
				<Pane style={{ height: '100%' }}>
					<StyledTextArea isError={isError} value={JSON.stringify(response, undefined, 2)} />
				</Pane>
			</div>
		</SplitPane>
	);
};
