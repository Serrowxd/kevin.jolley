import "./styles/App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "container" : "container-dark"}>
      <div className={"header"}>
        <h1>Kevin Jolley</h1>
        <p>Full-Stack Software Engineer</p>
      </div>
      <div className={"header-nav"}>
        <div className={"nav-container"}>
          <p>About</p>
          <p>Projects</p>
          <p>Hobbies</p>
          <p onClick={themeHandler}> {theme ? "Dark" : "Light"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
