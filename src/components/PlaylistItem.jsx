/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useSelector, useDispatch } from 'react-redux'
import SkeletonItems from './SkeletonItems'
import * as S from './PlaylistItem.styled'
import StyledLink from '../StyledLink'
import { ThemeContext, themes } from '../ThemeContext'
import { useGetAllTracksQuery } from './PlaylistItemAPI/apiPlayist'
import { useToggleFavoriteMutation } from './PlaylistItemAPI/favoriteApi'
import {
  addFavoriteTrack,
  removeFromFavorite,
} from './PlaylistItemAPI/favoriteSlice'

function PlaylistItem({ track }) {
  const [isLoading, setLoading] = useState(true)
  const [errorMessage] = useState('')
  const { theme } = useContext(ThemeContext)
  const isLightTheme = theme === themes.light

  const { data: tracks = [] } = useGetAllTracksQuery() // массив для добавления треков

  const [toggleFavorite] = useToggleFavoriteMutation() // добавление трека в избранное

  // флаг добавления в избранное
  const [likeColor, setLikeColor] = useState(true) // цвет иконки "избранное"

  const favoriteTracks = useSelector((state) => state.favorite) || [] // получить список избранных треков из store

   const isFavorite =
    Array.isArray(favoriteTracks) &&
    favoriteTracks.some((favTrack) => favTrack.id === track.id) // check if favoriteTracks is an array before calling the some <method></method> */

  const dispatch = useDispatch()

  const handleToggleFavorite = async () => {
    try {
      if (!track) {
        throw new Error('Track is undefined')
      }

      const isFavoriteNow = !isFavorite
    
      setLikeColor(isFavoriteNow)

      await toggleFavorite({ id: track.id, isFavorite: isFavoriteNow })

      if (isFavoriteNow) {
        dispatch(addFavoriteTrack({ id: track.id }))
      } else {
        dispatch(removeFromFavorite({ id: track.id }))
      }
    } catch (err) {
      console.error('Failed to toggle favorite', err)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
        <SkeletonItems />
        <SkeletonItems />
        <SkeletonItems />
        <SkeletonItems />
        <SkeletonItems />
        <p>
          <Skeleton count={0} />
        </p>
      </SkeletonTheme>
    )

  return (
    <div>
      {tracks.map((item) => (
        <S.PlaylistItem
          key={item.id}
          style={{
            background: theme.background,
          }}
        >
          <S.PlaylistTrackTrack>
            <S.TrackTitle>
              <S.TrackTitleImage
                style={{ background: isLightTheme ? '#F6F4F4' : ' #313131' }}
              >
                <S.SvgIconNote viewBox="0 0 20 19">
                  <S.StrokeNote d="M8 16V1.9697L19 1V13" />
                  <S.EllipseNote />
                  <S.EllipseStrokeNote />
                </S.SvgIconNote>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <StyledLink to="/" theme={theme}>
                  {item.name} <S.TrackTitleSpan />
                </StyledLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <StyledLink to="/" theme={theme}>
                {item.author}
              </StyledLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">{item.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.SvgIconLike viewBox="0 0 16 14" onClick={handleToggleFavorite}>
                <S.TriangleLike
                  id={`like-${item.id}`}
                  d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                />
              </S.SvgIconLike>

              <S.TrackTimeText>{item.duration_in_seconds}</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrackTrack>
        </S.PlaylistItem>
      ))}

      {errorMessage && (
        <div
          style={{
            color: 'red',
            margin: '20px',
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  )
}
export default PlaylistItem
