import React, { useContext } from 'react'
import * as S from './CenterBlock.styled'
import { ThemeContext, themes } from '../ThemeContext'

function CenterBlock() {
  const { theme } = useContext(ThemeContext)
  const isLightTheme = theme === themes.light
  return (
    <div>
      <S.CenterBlockSearch>
        <S.SVGSearch viewBox="0 0 17 18"  style={{ stroke: isLightTheme ? 'black' : 'white' }}>
          <path d="M11.9276 12.7748L15.37 17.0644" />
          <circle
            cx="8.48533"
            cy="8.48526"
            r="5.5"
            transform="rotate(-38.7469 8.48533 8.48526)"
          />
        </S.SVGSearch>
        <S.SearchInput
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterBlockSearch>
    </div>
  )
}

export default CenterBlock
