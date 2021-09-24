import './App.css';
import { GlobalContextProvider } from './context/globalContext';
function App() {

  return (
    <div className="App">
      <GlobalContextProvider>

      </GlobalContextProvider>
    </div>
  );
}

export default App;
