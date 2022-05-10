import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HitherEncounters from './HitherEncounters';
import StartPage from './StartPage';
import Menu from './Menu'
import Header from './Header'
import DownfallCitizens from './DownfallCitizens';
import Initiative from './Initiative';

function App() {

  return (

    <BrowserRouter>
        <Header/>
      <div className='content-container'>
          <div className='content-column-1'>
            <Menu/>
          </div>
        <div className='content-column-2'>
            <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/hitherencounters/*" element={<HitherEncounters/>} />
            <Route path="/downfallcitizens/*" element={<DownfallCitizens/>} />
            <Route path="/initiative/*" element={<Initiative/>} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
