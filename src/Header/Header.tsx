import React from 'react';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <span className={style.heading}>Kamu-s-utra! Cool social network</span>
    </div>
  );
}

export default Header;
