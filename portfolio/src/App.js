import "./styles/brutalism.css";
import { useEffect, useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "./assets/Serrow_C.png";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  const words = [
    "SOFTWARE_ENGINEER",
    "FULL-STACK.WEB_DEVELOPER",
    "JAVASCRIPT_ENJOYER",
    "BACK-END_JAVA_ENGINEER",
    "PHOTOGRAPHER",
    "WEB_DESIGNER",
  ];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className={"main"}>
        <Particles
          id="particles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <div className={"main_background_splitter"}></div>
        <nav className={"nav_container"}>
          <div className={"nav_logo"}>
            <img src={logo} alt="Logo" />
          </div>
        </nav>

        <section className={"section title"}>
          <div className={"title_container"}>
            <div className={"title_splitter"}>
              <h1 className={"main_title_left"}>KVN</h1>
              <h1 className={"main_splitter"}>.</h1>
              <h1 className={"main_title_right"}>DEV</h1>
            </div>
            {/*<h2 className={"title_label"}>{text}</h2>*/}
            <div className={"type_container"}>
              > <Typewriter words={words} loop={true} cursor={true} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
