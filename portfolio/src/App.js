import "./styles/brutalism.css";
import { useEffect, useMemo, useState } from "react";
import logo from "./assets/Serrow_C.png";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [theme, setTheme] = useState(true);
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
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
        // links: {
        //   color: "#ffffff",
        //   distance: 150,
        //   enable: true,
        //   opacity: 0.5,
        //   width: 1,
        // },
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

  const themeHandler = () => {
    setTheme(!theme);
  };

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
            <h2 className={"title_label"}></h2>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
