import React from 'react'
import { Link } from 'react-router-dom';
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div>
    <h1>Мои контакты:</h1>
    <h3>Номер телефона: 89827976137</h3>
    <h3>Telegram : @dddddkum</h3>
    <h3><Link to='https://vk.com/dddkum'>VK</Link></h3>
    <h3><Link to='https://github.com/dddkum'>Профиль Github</Link></h3>
  </div>
  )
}

export default Contacts