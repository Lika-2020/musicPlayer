
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonSideBar from './SkeletonSideBar'
import * as S from './SideBarBlock.styled'
import Playlist01 from './public/img/playlist01.png'
import Playlist02 from './public/img/playlist02.png'
import Playlist03 from './public/img/playlist03.png'

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
            <S.SidebarLink href="#">
              <S.SideBarImg src={Playlist01} />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SideBarImg src={Playlist02} />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SideBarImg src={Playlist03} />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </div>
  )
}

export default SideBarBlock
