import React, { useState } from 'react'

function CenterBlockFilter() {
 // const [filterButton, setFilterButton] = useState(false)
 // console.log(filterButton)
  /* const [filterButtonYear, setFilterButtonYear] = useState(false)
  console.log(filterButtonYear)
  const [filterButtonGenre, setFilterButtonGenre] = useState(false)
  console.log(filterButtonGenre) */

  const [activeCategory, setActiveCategory] = useState('')

  const handleClickCategory = (categoryName) => {
    if (activeCategory === categoryName) {setActiveCategory(''); return} 

    setActiveCategory(categoryName)
  }
  

  return (
    <div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className= {activeCategory === 'author' ? "filter__button button-author _btn-text active" : "filter__button button-author _btn-text"}

          onClick={() => {
            handleClickCategory('author')
      
          }}
          role="presentation"
        >
          исполнителю
        </div>
        <div
          className={activeCategory === 'year' ? "filter__button button-year _btn-text active": "filter__button button-year _btn-text"}
          onClick={() => handleClickCategory('year')}
          role="presentation"
        >
          году выпуска
        </div>
        <div
          className={activeCategory === 'genre' ? "filter__button button-genre _btn-text active": "filter__button button-genre _btn-text"}
          onClick={() => handleClickCategory('genre')}
          role="presentation"
        >
          жанру
        </div>
      </div>

      {activeCategory === 'author' ? (
  
           <div className="modal" role="presentation">
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
        </div>
        
       
      ) : null}

      {activeCategory === 'year' ? (
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
        
      ) : null}

      {activeCategory === 'genre' ? (
        <div className="modal">
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
          <span>Хип-Хоп</span>
        </div>
      ) : null}
    </div>
  )
}

export default CenterBlockFilter
