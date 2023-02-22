import React, { useState } from 'react'
import MainNav from '../../components/MainNav'
import CenterBlock from '../../components/CenterBlock'
import CenterBlockFilter from '../../components/CenterBlockFilter'
import CenterBlockContent from '../../components/CenterBlockContent'
import PlaylistItem from '../../components/PlaylistItem'
import * as S from './main.styled'

import SideBarBlock from '../../components/SideBarBlock'

import BarPlayer from '../../components/BarPlayer'
import Footer from '../../components/Footer'

function Main() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='wrapper'>
   
        <S.Container>
          <main className="main">
            <MainNav isOpen={isOpen} toggleMenu={toggleMenu} />

       

            <S.MainCenterBlock>
            <CenterBlock />
              <CenterBlockFilter />

              <S.CenterblockContent>
                <CenterBlockContent />

                <S.ContentPlaylistPlaylist>
                  <PlaylistItem />
                </S.ContentPlaylistPlaylist>
              </S.CenterblockContent>
            </S.MainCenterBlock>
            <S.MainSidebarSidebar>
              <SideBarBlock />
            </S.MainSidebarSidebar>
          </main>
          <S.Bar>
            <S.BarContent>
              <S.BarPlayerBlock>
                <BarPlayer />
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
          <Footer />
        </S.Container>
  
    </div>
  )
}

export default Main
