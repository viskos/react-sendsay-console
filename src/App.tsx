import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store/index';
import LoginPage from './containers/LoginPage';
import ConsolePage from './containers/ConsolePage';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route exact path="/console">
						<ConsolePage />
					</Route>
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
