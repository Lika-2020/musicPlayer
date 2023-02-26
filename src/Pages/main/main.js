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
import { ThemeProvider, ThemeContext } from '../../ThemeContext'



function Main() {
  const [isOpen, setIsOpen] = useState(false)


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    
  
   
    <S.Wrapper  >
             <ThemeProvider>
  <ThemeContext.Consumer>
  
      {({ theme, isLightTheme }) => (
  <S.Container style={{ color: theme.color, background: theme.background, isLightTheme, moonIcon: theme.moonIcon, sunIcon: theme.sunIcon }}>

    
        <S.Main >
          
          <MainNav isOpen={isOpen} toggleMenu={toggleMenu} theme={theme} />

          <S.MainCenterBlock>
            <CenterBlock />
            <CenterBlockFilter />

            <S.CenterblockContent>
              <CenterBlockContent />

              <S.ContentPlaylistPlaylist>
                <PlaylistItem theme={theme} />
              </S.ContentPlaylistPlaylist>
            </S.CenterblockContent>
          </S.MainCenterBlock>
          <S.MainSidebarSidebar>
            <SideBarBlock />
          </S.MainSidebarSidebar>
        </S.Main>
          
        <S.Bar>
          <S.BarContent>
            <S.BarPlayerBlock>
              <BarPlayer />
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        <Footer />
      </S.Container>
       )}
       </ThemeContext.Consumer>
    </ThemeProvider>
 
    </S.Wrapper>
   
          


  )
}

export default Main
