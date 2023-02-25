import styled from 'styled-components'

export const ContentTitlePlaylistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 51px;
  margin-bottom: 24px;
`
const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const PlaylistTitleColCol01 = styled(PlaylistTitleCol)`
margin-right: 480px;


  .col01 {
    width: 447px;
  }
`

export const PlaylistTitleColCol02 = styled(PlaylistTitleCol)`
margin-right: 280px;
  .col02 {
    width: 321px;
  }
`

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
margin-right: 260px;
  .col03 {
    width: 245px;
  }
`

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
  .col04 {
    width: 60px;
    text-align: end;
  }
`
export const SVGWatch = styled.svg`
  width: 12px;
  height: 12px;
  fill: none;
  circle {
    stroke: #696969;
  }
  path {
    stroke: #696969;
  }
`
