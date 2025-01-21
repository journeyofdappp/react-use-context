import { useState } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./store/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  function toogleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
