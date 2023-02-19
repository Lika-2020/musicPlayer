import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

import SkeletonSideBar from './SkeletonSideBar'
import * as S from './SideBarBlock.styled'
import Playlist01 from '../img/playlist01.png'
import Playlist02 from '../img/playlist02.png'
import Playlist03 from '../img/playlist03.png'

function SideBarBlock() {
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
        <SkeletonSideBar />
        <p>
          <Skeleton count={0} />
        </p>
      </SkeletonTheme>
    )

  return (
    <div>
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
    </div>
  )
}

export default SideBarBlock
