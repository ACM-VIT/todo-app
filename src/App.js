import Navbar from "./components/Navbar/Navbar";
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import Switch from '@mui/material/Switch';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("black");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "white" ? "black" : "white"))
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}> 
        <Navbar />
          <div className="switch">
            <Switch onChange= {toggleTheme} checked={theme==="black"}/>
          </div>
        <TodoForm />
        <Todos />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
