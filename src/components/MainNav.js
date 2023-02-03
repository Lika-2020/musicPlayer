import React, { useState } from 'react'


function MainNav() {

 const [navBurger, setNavBurger] = useState(false)

  return (
    <div>
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div
          className="nav__burger burger"
          onClick={() => setNavBurger(!navBurger)}
          role="presentation"
        >
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </div>
        <div className= { navBurger ? ['nav__menu.menu'] : ['hidden']}>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MainNav
