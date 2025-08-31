import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Homepage from './Homepage.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Planet from  './Planet.jsx'
import { useRef } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const x = 4; //distance between planets

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, }); // duration in ms, once = only animate first time
  }, []);

    return(
      <div>
        <Canvas className="canvas"
          style={{position: "fixed",
                top: 0,
                left: 0,
                zIndex: -10,
                height: "100vh", 
                width: "100vw",
                }}
          camera={{ position: [0, 0, 15], fov: 60 }} 
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />  
          <Stars 
            radius={100}        // Radius of the sphere the stars are scattered on
            depth={50}           // How far back stars go
            count={5000}         // Number of stars
            factor={4}           // Size factor
            saturation={0}       // Color saturation
            fade                 // Fade out distant stars
          />
        </Canvas>

        <section>
          <h1 className="homepage-header">Andrew Garon</h1>
          <Homepage/>
        <Canvas
          className="planets-canvas"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 0,
            height: "100vh",
            width: "100vw",
        }}
        camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} 
        />
            <Planet
              planetName="About Me"
              textureUrl="/earthtext.jpg"
              position={[0, 0, 0]}
              rotationSpeed= {0.002}
              planetSize={[2, 64, 64]}
              onClick={() => scrollToSection(aboutRef)}
            />
            <Planet
              planetName="Contact"
              textureUrl="/marstext.jpg"
              position={[x, 0, 0]}
              rotationSpeed={0.001}
              planetSize={[1.1, 64, 64]}
              onClick={() => scrollToSection(contactRef)}
            />
            <Planet
              planetName="Projects"
              textureUrl="/venustext.jpg"
              position={[-x, 0, 0]}
              rotationSpeed={.0003}
              planetSize={[1.8, 64, 64]}
              onClick={() => scrollToSection(projectsRef)}
            />
          </Canvas>  
        </section>
        
        <section className="about-section" ref={aboutRef} 
        data-aos="fade-up"
        data-aos-duration="10000"
      >
          <About/>
        </section>

        <section className="contact-section" ref={contactRef} 
        data-aos="fade-up"
        data-aos-duration="10000">
          <Contact/>
        </section>

        <section className="projects-section" ref={projectsRef} 
        data-aos="fade-up"
        data-aos-duration="10000">
          <Projects/>
        </section>

        <section className="footer-section">
          <Footer/>
        </section>
      </div>
    );
}

export default App
