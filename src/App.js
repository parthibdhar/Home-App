
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
    <>
      <Router>
        <PrimeReactProvider>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </PrimeReactProvider>
      </Router>
    </>
  );
}

export default App;
