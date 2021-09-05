import React from 'react';
import './App.css';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Aside />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
