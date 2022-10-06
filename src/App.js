import Navbar from "./components/Navbar/Navbar";
import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
