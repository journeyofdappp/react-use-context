import Header from "./components/Header";
import ThemeContextProvider from "./store/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
}

export default App;
