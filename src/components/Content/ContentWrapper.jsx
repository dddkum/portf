import './ContentWrapper.scss';
import React from 'react'
import Cursor from '../Cursor/Cursor';
import Header from '../Header/Header';
const ContentWrapper = () => {
  return (
    <div className='content'>
    <Header />
    <Cursor />
    
    </div>
  )
}

export default ContentWrapper