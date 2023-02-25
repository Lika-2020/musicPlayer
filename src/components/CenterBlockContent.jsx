import * as S from './CenterBlockContent.styled'

function CenterBlockContent() {
  return (
    <S.ContentTitlePlaylistTitle>
      <S.PlaylistTitleColCol01> Трек</S.PlaylistTitleColCol01>
      <S.PlaylistTitleColCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColCol02>
      <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
      <S.PlaylistTitleCol04>
        <S.SVGWatch viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="5.5" />
          <path d="M4 6H6.5V2.5" />
        </S.SVGWatch>
      </S.PlaylistTitleCol04>
    </S.ContentTitlePlaylistTitle>
  )
}

export default CenterBlockContent
