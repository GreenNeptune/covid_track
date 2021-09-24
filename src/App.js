import './App.css';
import Header from './components/header/header';
import { GlobalContextProvider } from './context/globalContext';
function App() {

  return (
    <div className="App">
      <GlobalContextProvider>
        <Header />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
