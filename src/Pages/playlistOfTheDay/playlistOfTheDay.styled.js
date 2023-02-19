import styled from 'styled-components'

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  background-color: black;
`

export const PlaylistTrackTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`

export const SvgIconNote = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const StrokeNote = styled.path`
  stroke: #4e4e4e;
`

export const EllipseNote = styled.ellipse`
  cx: 4.5px;
  cy: 16px;
  rx: 3.5px;
  ry: 2px;
  stroke: #4e4e4e;
`
export const EllipseStrokeNote = styled.ellipse`
  cx: 15.5px;
  cy: 13px;
  rx: 3.5px;
  ry: 2px;
  stroke: #4e4e4e;
`

export const TrackTitleText = styled.div``
export const TrackTitleLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackAlbum = styled.div`
  width: 245px;
`

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTime = styled.div``

export const SvgIconLike = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

export const TriangleLike = styled.path`
  stroke: #696969;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
