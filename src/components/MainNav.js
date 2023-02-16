
import * as S from './MainNav.styled'
import logo from './public/img/logo.png'

function MainNav(props) {
  return (
    <div>
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
                <S.MenuLink href="https://">Мой плейлист</S.MenuLink>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuLink href="https://">Войти</S.MenuLink>
              </S.MenuItem>
            </S.MenuList>
          </S.NavMenu>
        )}
      </S.MainNav>
    </div>
  )
}

export default MainNav
