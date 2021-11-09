import React from 'react';
import './Navigation.css';

const Navigation = ( {setRoute} ) => {
	return (
		<nav className="stilNav">
			<a href="#getMeHome">
				<p className="f3 link dim black pa2 pointer stilButNav" onClick={() => setRoute('home')}> Acasa </p></a>
			<a href="#serviciiFrate">
				<p className="f3 link dim black pa2 pointer stilButNav"> Servicii </p></a>
			<p 
				className="f3 link dim black pa2 pointer stilButNav" onClick={() => setRoute('piese')}> Piese auto </p>
			<a href="#whoWeAre">
				<p className="f3 link dim black pa2 pointer stilButNav"> Contact </p></a>
		</nav>
	)
}

export default Navigation;