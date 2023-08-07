import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CloudImage from '../../img/Cloud.png';


const Header = () => {
  return (
    <div className="wrapper">
        <img className="logo" src={CloudImage} alt="logo" />
            <div className="navigation">
            <ul>
                <li><Link to='/home'>Главная страница</Link></li>
                <li><Link to='/about'>Обо мне</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
                <li><Link to='/github'>GitHub</Link></li>
                <li><Link to='/weather'>Погодка</Link></li>
                <li><Link to='/art'>Создать прикол</Link></li>
            </ul>
            </div>
        <img className="logo" src={CloudImage} alt="logo" />
    </div>
  )
}

export default Header

