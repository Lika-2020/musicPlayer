import { Link } from 'react-router-dom'
import * as S from './SideBarBlock.styled'
import Playlist01 from '../img/playlist01.png'
import Playlist02 from '../img/playlist02.png'
import Playlist03 from '../img/playlist03.png'

function SideBarBlock() {
  return (
    <>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <Link to="/playlistOfTheDay">
              <S.SideBarImg src={Playlist01} alt="Playlist дня" />
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SideBarImg src={Playlist02} alt="100 танцевальных хитов" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SideBarImg src={Playlist03} alt="Инди-заряд" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </>
  )
}

export default SideBarBlock
