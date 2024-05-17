import "./styles/brutalism.css";
import { useEffect, useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "./assets/Serrow_C.png";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);
  const [navScrollController, setNavScrollController] = useState(false);

  const words = [
    "SOFTWARE_ENGINEER",
    "FRONT_END.WEB_DEVELOPER",
    "JAVASCRIPT_ENJOYER",
    "BACK_END.JAVA_ENGINEER",
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
          value: "#ff6d1b",
        },
        move: {
          direction: "left",
          enable: true,
          random: true,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 3, max: 9 },
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
        <nav className={navScrollController ? "nav_container" : "nav_container hidden"}>
          {/*<div className={"nav_logo"}>*/}
          {/*  /!*<img src={logo} alt="Logo" />*!/*/}
          {/*</div>*/}

          <p className={"nav_header"}>K/J</p>

          <div className={"nav_item_container"}>
            <p className={"nav_item"}>About</p>
            <p className={"nav_item"}>Projects</p>
            <p className={"nav_item"}>Github</p>
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
              >{" "}
              <Typewriter
                words={words}
                loop={true}
                cursor={true}
                cursorStyle={"_"}
              />
            </div>
          </div>
        </section>
        
        <section>
        
        
        
        </section>
      </div>
    );
  }
}

export default App;
