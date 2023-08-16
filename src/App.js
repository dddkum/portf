import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './components/Content/MainPage/MainPage';
import Home from './components/Content/Home/Home';
import About from './components/Content/About/About';
import Contacts from './components/Content/Contacts/Contacts';
import GitHub from './components/Content/GitHub/GitHub';
import Weather from './components/Content/Weather/Weather';
import ArtGenerator from './components/Content/ArtGenerator/ArtGenerator';
import Countries from './components/Content/Countries/Countries';
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <BrowserRouter>
    <div className="main-container">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/github' element={<GitHub />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/art' element={<ArtGenerator />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/smile' element={<Cursor />} />
      </Routes>
    </div>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;900&family=Ubuntu:wght@300;400;500;700&display=swap');
    </style>
    </BrowserRouter>
  );
}

export default App;

