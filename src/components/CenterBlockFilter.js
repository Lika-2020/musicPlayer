import React, { useState } from 'react'

function CenterBlockFilter() {
  /*  const [filterButtonAuthor, setFilterButtonAuthor] = useState(false)
  console.log(filterButtonAuthor)
  const [filterButtonYear, setFilterButtonYear] = useState(false)
  console.log(filterButtonYear)
  const [filterButtonGenre, setFilterButtonGenre] = useState(false)
  console.log(filterButtonGenre) */

  const [activeCategory, setActiveCategory] = useState('')

  const handleClickCategory = (categoryName) => {
  
    if (activeCategory === categoryName) return

    setActiveCategory(categoryName)
  }

  if (activeCategory === 'author') {
    return (
      <div className="modal">
        <span>Michael Jackson</span>
        <span>Michael Jackson</span>
        <span>Michael Jackson</span>
        <span>Michael Jackson</span>
        <span>Michael Jackson</span>
      </div>
    )
  }
  console.log(activeCategory)

 /*  activeCategory === 'author' ? (
    <div className="modal">
      <span>Michael Jackson</span>
      <span>Michael Jackson</span>
      <span>Michael Jackson</span>
      <span>Michael Jackson</span>
      <span>Michael Jackson</span>
    </div>
  ) : null */

  return (
    <div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className="filter__button button-author _btn-text"
          onClick={() => handleClickCategory('author')}
          role="presentation"
        >
          исполнителю
        </div>
        <div
          className="filter__button button-year _btn-text"
          onClick={() => handleClickCategory('year')}
          role="presentation"
        >
          году выпуска
        </div>
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => handleClickCategory('genre')}
          role="presentation"
        >
          жанру
        </div>
      </div>

      <div className="year">
        <label htmlFor="newer">
          <input id="newer" type="radio" />
          Более новые
        </label>
        <label htmlFor="older">
          <input id="older" type="radio" />
          Более старые
        </label>
      </div>
      <div className="modal">
        <span>Хип-хоп</span>
        <span>Хип-хоп</span>
        <span>Хип-хоп</span>
        <span>Хип-хоп</span>
      </div>
    </div>
  )
}

export default CenterBlockFilter
