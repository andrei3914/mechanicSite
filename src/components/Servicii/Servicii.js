import React from 'react';
import './Servicii.css';

const Servicii = () => {
	return (
		<div className="dimensiuniServicii" id="serviciiFrate">
			<h1 className="f2 pa3"> Servicii </h1>
			<div className="container">
				
				<div class="card center">
					<div class="card-content">
						<h2 class="card-title"> Probleme turbine </h2>
					</div>
				</div>
				<div class="card center imagine1">
					<div class="card-content">
						<h2 class="card-title"> Probleme injectoare </h2>
					</div>
				</div>
				<div class="card center imagine2">
					<div class="card-content">
						<h2 class="card-title"> Pompe de injectie </h2>
					</div>
				</div>
				<div class="card center imagine3">
					<div class="card-content">
						<h2 class="card-title"> Schimburi consumabile </h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Servicii;