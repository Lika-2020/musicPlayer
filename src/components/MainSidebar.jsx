/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import * as S from './MainSidebar.styled'
import { ThemeContext, themes } from '../ThemeContext'

function MainSidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isLightTheme = theme === themes.light
  return (
    <div>
      <S.SidebarPersonal>
        <S.SidebarPersonalName
          style={{
            color: theme.color,
          }}
        >
          Sergey.Ivanov
        </S.SidebarPersonalName>
        <S.SidebarAvatar  style={{ background: isLightTheme ? '#F6F4F4' : ' #313131' }} />
      </S.SidebarPersonal>
    </div>
  )
}

export default MainSidebar
