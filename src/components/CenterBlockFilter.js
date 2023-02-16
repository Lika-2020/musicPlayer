import React, { useState } from 'react'
import * as S from './CenterBlockFilter.styled'

function CenterBlockFilter() {
  // const [filterButton, setFilterButton] = useState(false)
  // console.log(filterButton)
  /* const [filterButtonYear, setFilterButtonYear] = useState(false)
  console.log(filterButtonYear)
  const [filterButtonGenre, setFilterButtonGenre] = useState(false)
  console.log(filterButtonGenre) */

  const [activeCategory, setActiveCategory] = useState('')

  const handleClickCategory = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory('')
      return
    }

    setActiveCategory(categoryName)
  }

  return (
    <div>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterblockFilterFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          className={
            activeCategory === 'author'
              ? 'filter__button button-author _btn-text active'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => {
            handleClickCategory('author')
          }}
          role="presentation"
        >
          исполнителю
        </S.FilterButton>
        <S.FilterButton
          className={
            activeCategory === 'year'
              ? 'filter__button button-year _btn-text active'
              : 'filter__button button-year _btn-text'
          }
          onClick={() => handleClickCategory('year')}
          role="presentation"
        >
          году выпуска
        </S.FilterButton>
        <S.FilterButton 
          className={
            activeCategory === 'genre'
              ? 'filter__button button-genre _btn-text active'
              : 'filter__button button-genre _btn-text'
          }
          onClick={() => handleClickCategory('genre')}
          role="presentation"
        >
          жанру
        </S.FilterButton>
      </S.CenterblockFilterFilter>

      {activeCategory === 'author' ? (
        <S.Modal role="presentation">
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
          <span>Michael Jackson</span>
        </S.Modal>
      ) : null}

      {activeCategory === 'year' ? (
        <S.Year>
          <S.RadioLabel htmlFor="newer">
            <S.RadioInput id="newer" type="radio" />
            Более новые
          </S.RadioLabel>

          <S.RadioLabel htmlFor="older">
            <S.RadioInput id="older" type="radio" />
            Более старые
          </S.RadioLabel>
        </S.Year>
      ) : null}

      {activeCategory === 'genre' ? (
        <S.Modal>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
        </S.Modal>
      ) : null}
    </div>
  )
}

export default CenterBlockFilter
