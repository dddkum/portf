import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './components/Content/MainPage/MainPage';
import {Comments} from './components/Content/Comments/Comments';
import About from './components/Content/About/About';
import Contacts from './components/Content/Contacts/Contacts';
import Weather from './components/Content/Weather/Weather';
import ArtGenerator from './components/Content/ArtGenerator/ArtGenerator';
import Countries from './components/Content/Countries/Countries';
import Navigation from './components/Navigation/Navigation';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <BrowserRouter>
    <div className="main-container">
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/art' element={<ArtGenerator />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/smile' element={<Cursor />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </div>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;900&family=Ubuntu:wght@300;400;500;700&display=swap');
    </style>
    </BrowserRouter>
  );
}

export default App;


