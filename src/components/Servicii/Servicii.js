import React from 'react';
import './Servicii.css';

const Servicii = () => {
	return (
		<div className="dimensiuniServicii" id="serviciiFrate">
			<h1 className="f2 pa3"> Servicii </h1>
			<div className="container">
				
				<div className="card center">
					<div className="card-content">
						<h2 className="card-title"> Probleme turbine </h2>
					</div>
				</div>
				<div className="card center imagine1">
					<div className="card-content">
						<h2 className="card-title"> Probleme injectoare </h2>
					</div>
				</div>
				<div className="card center imagine2">
					<div className="card-content">
						<h2 className="card-title"> Pompe de injectie </h2>
					</div>
				</div>
				<div className="card center imagine3">
					<div className="card-content">
						<h2 className="card-title"> Schimburi consumabile </h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Servicii;