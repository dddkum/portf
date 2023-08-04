import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Cursor from './components/Cursor/Cursor';
import MainPage from './components/Content/MainPage/MainPage';
import Home from './components/Content/Home/Home';
import About from './components/Content/About/About';
import Contacts from './components/Content/Contacts/Contacts';
import GitHub from './components/Content/GitHub/GitHub';
import Header from './components/Header/Header';
import ContentWrapper from './components/Content/ContentWrapper';
import Weather from './components/Content/Weather/Weather';

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      <ContentWrapper />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/github' element={<GitHub />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

