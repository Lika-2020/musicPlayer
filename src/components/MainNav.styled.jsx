/* eslint-disable no-undef */

import styled from 'styled-components'


export const MainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`
export const LogoImage = styled.img.attrs({ alt: 'logo' })`
   &.logo__image {
    width: 113.33px;
    height: 17px;
    color: #181818;
   } `

export const NavLogo = styled.nav`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`
export const NavBurger = styled.nav`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`
export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SVGSearch = styled.svg`
  width: 17px;
  height: 18px;
  fill: none;
  path {
    stroke: white;
    stroke-linecap: round;
  }
  circle {
    stroke: white;
  }
`

 export const SearchInput = styled.input`
  &.search__text {
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`

 export const SvgContainer = styled.div`
 margin-right: 50px;
`;

 export const Circle = styled.svg`
  width: 50px;
  height: 50px;

`;

 export const Path = styled.svg`
  width: 17px;
  height: 18px;

  
`;
