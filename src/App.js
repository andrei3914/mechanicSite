import React, {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import Servicii from './components/Servicii/Servicii';
import Contact from './components/Contact/Contact';
import Piese from './components/Piese/Piese';
import Slideshow from './components/Slideshow/Slideshow';
import './App.css';
import Particles from 'react-tsparticles';
import ParticleOptions from './components/Misc/ParticleOptions';

function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="App">
     <Particles params={ParticleOptions} />
     <Navigation setRoute={setRoute}/>
    { route === 'home'
    ? <div>
       <Slideshow />
       <Servicii />
       <Contact />
      </div>
    :
      <div>
        <Piese />
      </div>
    }
    </div>
  );
}

export default App;
