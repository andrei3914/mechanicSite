import poza1 from './turbo-engine.png';
import poza2 from './piston.png';

const ParticleOptions = {
	fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            repulse: {
              distance: 120,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 15,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: [ 
            	"character",
            	"image",
            ],

            options: {
            	image: [{
            		src: poza1,
            		width: 32,
            		height: 32,
            		particles: {
            			size: {
            				value:16
            			}
            		}
            	},
            	{
            		src: poza2,
            		width: 32,
            		height: 32,
            		particles: {
            			size: {
            				value:16
            			}
            		}
            	}],
            	character: [{
            		fill: true,
		            font: "Verdana",
		            value: ["🚗", "🚘", "🚙", "🚚", "🚛", "🚦","🚳"],
		            style: "",
		            weight: 400
            	}]
            }
          },
          size: {
            random: true,
            value: 20,
          },
        },
        detectRetina: true,
      
}

export default ParticleOptions;