import Header from "./components/Header";
import ThemeContextProvider from "./store/ThemeContext";
import InfiniteSlider from "./components/Slider";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <InfiniteSlider />
    </ThemeContextProvider>
  );
}

export default App;
