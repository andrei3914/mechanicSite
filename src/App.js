import React, {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import Servicii from './components/Servicii/Servicii';
import Contact from './components/Contact/Contact';
import Piese from './components/Piese/Piese';
import Slideshow from './components/Slideshow/Slideshow';

import './App.css';
import Particles from 'react-tsparticles';
import ParticleOptions from './components/Misc/ParticleOptions';
import Footer from './components/Footer/Footer';

function App() {
  const [route, setRoute] = useState('home');
  
  const inPiese = () => {
    let isInPiese = false;
    route === 'home' ? isInPiese = false : isInPiese = true;
    return isInPiese; 
  }

  return (
    <div className="App">
     <Particles className="particles" params={ParticleOptions} />
     <Navigation setRoute={setRoute} inPiese={inPiese}/>
    { route === 'home'
    ? <div>
       <Slideshow />
       <Servicii />
       <Contact />
       <Footer />
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
