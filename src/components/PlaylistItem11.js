/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
function PlaylistItem11() {
  return (
    <div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {' '}
                <span className="track__title-span" />
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" />
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://" />
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem11