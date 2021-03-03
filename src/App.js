import { useState } from 'react';
import "tailwindcss/tailwind.css";
import './App.scss';
import { ThemeProvider } from "./context/themeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  return (
    <ThemeProvider setIsDarkMode={setIsDarkMode}>
      <div className="App">
      </div>
    </ThemeProvider>
  );
}

export default App;