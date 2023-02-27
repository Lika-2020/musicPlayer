import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import * as S from './MainNav.styled'
import logo from '../img/logo.png'
import StyledLink from '../StyledLink'
import { ThemeContext, themes } from '../ThemeContext'
import logoWhite from '../img/logoWhite.jpg'

function MainNav(props) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isLightTheme = theme === themes.light

  return (
    <div>
      <S.MainNav
        style={{
          background: theme.background,
        }}
      >
        <S.NavLogo>
          <S.LogoImage src= {isLightTheme ? logoWhite : logo } alt="Logo" />
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
                <StyledLink to="/" theme={theme}>
                  Главное
                </StyledLink>
              </S.MenuItem>
              <S.MenuItem>
                <StyledLink to="/myTracks" theme={theme}>
                  Мой плейлист
                </StyledLink>
              </S.MenuItem>
              <S.MenuItem>
                <StyledLink to="/" theme={theme}>
                  Войти
                </StyledLink>
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
    </div>
  )
}

export default MainNav
