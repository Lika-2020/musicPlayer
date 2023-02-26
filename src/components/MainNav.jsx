import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext, themes } from '../ThemeContext'

import * as S from './MainNav.styled'
import logo from '../img/logo.png'

function MainNav(props) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isLightTheme = theme === themes.light



  return (
  

    <S.MainNav
      style={{
        color: props.theme.fontColor,
        background: theme.background,
      }}
    >
    
      <S.NavLogo>
        <S.LogoImage src={logo} />
      </S.NavLogo>

      <S.NavBurger onClick={props.toggleMenu}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>

      {props.isOpen && (
        <S.NavMenu>
          
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink  href="https://" >Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <Link style={{ color: 'white' }} to="/myTracks">
                Мой плейлист
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="https://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>

          <S.SvgContainer
            onClick={() => toggleTheme()}
            isLightTheme={isLightTheme}
          >
            <FontAwesomeIcon icon={isLightTheme ? faSun : faMoon} />
          </S.SvgContainer>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}



export default MainNav
