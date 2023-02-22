import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import SkeletonItems from './SkeletonItems'
import * as S from './PlaylistItem.styled'

function PlaylistItem() {
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
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
      <S.PlaylistItem>
        <S.PlaylistTrackTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.SvgIconNote viewBox="0 0 20 19">
                <S.StrokeNote d="M8 16V1.9697L19 1V13" />
                <S.EllipseNote />
                <S.EllipseStrokeNote />
              </S.SvgIconNote>
            </S.TrackTitleImage>
    
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                Guilt <S.TrackTitleSpan />
              </S.TrackTitleLink>
            </S.TrackTitleText>
            </S.TrackTitle>
       

          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.SvgIconLike viewBox="0 0 16 14">
              <S.TriangleLike d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378" />
            </S.SvgIconLike>
            <S.TrackTimeText>4:44</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrackTrack>
      </S.PlaylistItem>
    </div>
  )
}
export default PlaylistItem
