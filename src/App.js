import React, { useState } from 'react'
import MainNav from './components/MainNav'
import CenterBlock from './components/CenterBlock'
import CenterBlockFilter from './components/CenterBlockFilter'
import CenterBlockContent from './components/CenterBlockContent'
import PlaylistItem from './components/PlaylistItem'
import MainSidebar from './components/MainSidebar'
import SideBarBlock from './components/SideBarBlock'
import BarPlayer from './components/BarPlayer'
import Footer from './components/Footer'
import AppRouters from './routers'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  
  return (
    <div>
      <AppRouters />
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <MainNav isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className="main__centerblock centerblock">
              <CenterBlock />
              <CenterBlockFilter />
              <div className="centerblock__content">
                <CenterBlockContent />
                <div className="content__playlist playlist">
                  <PlaylistItem />
                </div>
              </div>
            </div>
            <div className="main__sidebar sidebar">
              <MainSidebar />
              <SideBarBlock />
            </div>
          </main>
          <div className="bar">
            <div className="bar__content'">
              <div className="bar__player-block">
                <BarPlayer />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
