import Header from "./components/Header";
import { ThemeProvider } from "./store/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
