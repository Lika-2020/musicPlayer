import { Link } from 'react-router-dom'
import * as S from './MainNav.styled'
import logo from '../img/logo.png'

function MainNav(props) {
  return (
    <S.MainNav>
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
              <S.MenuLink href="https://">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/myTracks">Мой плейлист</Link>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="https://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNav
