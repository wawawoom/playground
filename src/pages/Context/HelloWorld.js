import { useContext } from "react";
import { themes, ThemeContext } from "./ThemeContext";

const HelloWorld = () => {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        margin: -60,
        padding: 60,
        height: "100vh",
        background: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      <h1>Theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme("light")}>Apply Light Theme</button>
      <button onClick={() => setTheme("dark")}>Toggle Dark Theme</button>
    </div>
  );
};

export default HelloWorld;
