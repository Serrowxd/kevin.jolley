import "./styles/brutalism.css";
import { useState } from "react";
import logo from "./assets/Serrow_C.png";
import { Particles } from "@tsparticles/react";

function App() {
  const [theme, setTheme] = useState(true);

  const themeHandler = () => {
    setTheme(!theme);
  };

  return (
    <div className={"main"}>
      <Particles
        id="particles"
        options={{
          background: {
            color: "#000000",
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              value: 200,
            },
            move: {
              enable: true,
              speed: 5,
            },
          },
        }}
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

export default App;
