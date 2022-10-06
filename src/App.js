import Navbar from "./components/Navbar/Navbar";
import { TodoProvider } from "./context/TodoContext/TodoContext";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Navbar />
      </TodoProvider>
    </div>
  );
}

export default App;
