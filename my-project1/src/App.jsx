import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Header from './Header.jsx'
import Homepage from './Homepage.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Planet from  './Planet.jsx'
import { useRef } from "react";

function App() {

  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const x = 4; //distance between planets

    return(
      <>
        <Canvas className="canvas"
          style={{position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                height: "100vh", 
                width: "100vw",
                }}
          camera={{ position: [0, 0, 15], fov: 60 }} 
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />  
          <Planet
            planetName="About Me"
            textureUrl="/earthtext.jpg"
            position={[0, 0, 0]}
            rotationSpeed= {0.002}
            planetSize={[2, 64, 64]}
            onClick={() => console.log("Earth clicked!")}
          />
          <Planet
            planetName="Contact"
            textureUrl="/marstext.jpg"
            position={[x, 0, 0]}
            rotationSpeed={0.001}
            planetSize={[1.1, 64, 64]}
            onClick={() => console.log("Mars clicked!")}
          />
          <Planet
            planetName="Projects"
            textureUrl="/venustext.jpg"
            position={[-x, 0, 0]}
            rotationSpeed={.0003}
            planetSize={[1.8, 64, 64]}
            onClick={() => console.log("Venus clicked!")}
          />
          <Stars 
            radius={100}        // Radius of the sphere the stars are scattered on
            depth={50}           // How far back stars go
            count={5000}         // Number of stars
            factor={4}           // Size factor
            saturation={0}       // Color saturation
            fade                 // Fade out distant stars
          />
        </Canvas>
        <Homepage/>
      </>
    );
}

export default App
