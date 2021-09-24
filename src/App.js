import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import { GlobalContextProvider } from './context/globalContext';
function App() {

  return (
    <div className="App">
      <GlobalContextProvider>
        <Header />
        <Dashboard />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
