import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import './style.css';

export const SplitConsole: React.FC = () => {
	const initialWidth: number = window.innerWidth / 2;

	return (
		<div>
			<SplitPane
				style={{ margin: '0 15px' }}
				split="vertical"
				minSize={50}
				defaultSize={initialWidth}
			>
				<Pane className="pane">
					<input type="textarea" style={{ width: '100%', height: '100%', border: 'none' }} />
				</Pane>
				<Pane className="pane">
					<input type="textarea" style={{ width: '100%', height: '100%', border: 'none' }} />
				</Pane>
			</SplitPane>
		</div>
	);
};
