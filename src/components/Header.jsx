import { ThemeContext } from "../store/ThemeContext";
import { useContext } from "react";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } flex flex-col justify-center items-center h-screen w-screen font-serif `}
    >
      <h1 className="text-5xl tracking-tight">Hello World</h1>
      <p className="tracking-tight">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </p>
      <button
        className="tracking-tight mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </div>
  );
}
