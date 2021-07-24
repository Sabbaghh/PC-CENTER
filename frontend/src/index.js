import React from 'react';
import ReactDOM from 'react-dom';
// import './bootstrap.min.css';
// import './bootstrap2.min.css';
// import './bootstrap3.min.css';
// import './bootstrap4.min.css';
// import './bootstrap5.min.css';
// import './bootstrap6.min.css';
import './bootstrap7.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
