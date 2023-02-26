import styled from 'styled-components'

const PlayerButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`

export const TimeLIneInput = styled.input`
  width: 100%;
  background-color: #580ea2;
  & {
    -webkit-appearance: none;
    margin-right: 15px;
    margin-left: 50px;
    height: 4px;
    background: #580ea2;
    border-radius: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`
export const PauseButton = styled.button`
  background-color: rgba(28, 28, 28, 0.5);
`

const IconButton = styled.div`
  &:hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const PlayerBtnPrev = styled(PlayerButton)``
export const PlayerBtnPlayBtn = styled(PlayerButton)`
  margin-right: 23px;
  margin-left: 23px;
`

export const SvgIconPrev = styled.svg`
  width: 16px;
  height: 14px;
  fill: none;
`

export const LinePrev = styled.path`
  stroke: white;
`

export const TrianglePrev = styled.path`
  fill: #d9d9d9;
`

export const SvgIconPlay = styled.svg`
  width: 15px;
  height: 16px;
  fill: none;
`

export const TriaglePlay = styled.path`
  fill: #d9d9d9;
`

export const SvgIconNext = styled.svg`
  width: 16px;
  height: 14px;
  fill: none;
`

export const LineNext = styled.path`
  stroke: white;
`

export const TriangleNext = styled.path`
  fill: #d9d9d9;
`

export const SvgIconRepeat = styled.svg`
  width: 20px;
  height: 18px;
  fill: none;
`

export const LineRepeat = styled.path`
  fill: #696969;
`

export const TriangleRepeat = styled.path`
  fill: #696969;
`

export const SvgIconShuffle = styled.svg`
  width: 20px;
  height: 18px;
  fill: none;
`

export const LineShuffle = styled.path`
  fill: #696969;
`

export const TriangleShuffle = styled.path`
  fill: #696969;
`

export const SvgIconNote = styled.svg`
  width: 20px;
  height: 19px;
  fill: none;
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

export const PlayerBtnNext = styled(PlayerButton)`
  margin-right: 28px;
  fill: #a53939;
`
export const PlayerBtnRepeatBtnIcon = styled(IconButton)`
  margin-right: 24px;
`
export const PlayerBtnShuffleBtnIcon = styled(IconButton)`
margin-right: 23px`;

export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`
export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`

export const AuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`
export const AlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
const PlayBtnIcon = styled.div`
  padding: 5px;
`
const PlayBtnIconHover = styled(PlayBtnIcon)`
  &:hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`
export const TrackPlayLikeBtnIcon = styled(PlayBtnIconHover)``

const IconLikeDislikeActive = styled.svg`
  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const SvgIconLike = styled(IconLikeDislikeActive)`
  width: 16px;
  height: 14px;
  fill: none;
`

export const TriangleLike = styled.path`
  stroke: #696969;
`

export const SvgIconDislike = styled(IconLikeDislikeActive)`
  width: 16px;
  height: 14px;
  fill: none;
`

export const LineDislike = styled.path`
  stroke: #696969;
`

export const TriangleDislike = styled.path`
  stroke: #696969;
`

export const SvgIconVolume = styled.svg`
  width: 14px;
  height: 18px;
  fill: none;
`

export const MaskVolume = styled.mask`
  fill: white;
`

export const InsidePathVolume = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
`

export const MainPathVolume = styled.path`
  fill: white;
  mask: url(#path-1-inside-1_2985_507);
`

export const StrokePathVolume = styled.path`
  stroke: white;
`

export const TrackPlayDislikeBtnIcon = styled(PlayBtnIconHover)``

export const BarVolumeBlockVolume = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding-left: 1200px;
`
export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeProgressBtn = styled.div`
  width: 109px;
  cursor: pointer;
`
export const VolumeProgressLine = styled.input.attrs({
  type: 'range',
  name: 'range',
})`

height: 2px;


  &.btn {
    cursor: pointer;
  }
`
