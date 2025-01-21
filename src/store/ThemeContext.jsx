import { useState, createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toogleTheme: () => {},
});
