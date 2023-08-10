import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import CloudImage from '../../img/Cloud.png';


const Header = () => {
  return (
    <div className="wrapper">
        <img className="logo" src={CloudImage} alt="logo" />
            <div className="navigation">
            <ul>
                <li><Link to='/'>Главная страница</Link></li>
                <li><Link to='/home'>Блаблабла</Link></li>
                <li><Link to='/about'>Обо мне</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
                <li><Link to='/github'>GitHub</Link></li>
                <li><Link to='/weather'>Погодка</Link></li>
                <li><Link to='/art'>Создать прикол</Link></li>
                <li><Link to='/countries'>Страны мира</Link></li>
            </ul>
            </div>
        <img className="logo" src={CloudImage} alt="logo" />
    </div>
  )
}

export default Header

