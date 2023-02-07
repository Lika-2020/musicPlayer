/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import MainNav from './components/MainNav'
import CenterBlock from './components/CenterBlock'
import CenterBlockFilter from './components/CenterBlockFilter'
import CenterBlockContent from './components/CenterBlockContent'
import PlaylistItem from './components/PlaylistItem'
import MainSidebar from './components/MainSidebar'
import SideBarBlock from './components/SideBarBlock'
import BarPlayer from './components/BarPlayer'
import Footer from './components/Footer'

function App() {
  return (
    <SkeletonTheme>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <MainNav />
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
    </SkeletonTheme>
  )
}

export default App
