import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';
import './styles/App.css';
import React from "react";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './context/ColorModeContext';
function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            /* Add Your color scheme for light theme*/
          } : {
            /* Add your color scheme for black theme */
          })
        },
      }),
    [mode],
  );
  return (
    <div className='App'>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <TodoForm />
          <Todos />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
