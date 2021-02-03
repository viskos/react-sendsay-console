import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import { Typography } from '../Typography/Typography';
import './style.css';

export const SplitConsole: React.FC = () => {
	const initialWidth: number = window.innerWidth / 2;

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
			defaultSize={initialWidth}
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
					<textarea className="pane" />
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
					<textarea className="pane" />
				</Pane>
			</div>
		</SplitPane>
	);
};
