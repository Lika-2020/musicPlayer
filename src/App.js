import MainNav from './components/MainNav'
import CenterBlock from './components/CenterBlock'
import CenterBlockFilter from './components/CenterBlockFilter'
import CenterBlockContent from './components/CenterBlockContent'
import PlaylistItem1 from './components/PlaylistItem1'
import PlaylistItem2 from './components/PlaylistItem2'
import PlaylistItem3 from './components/PlaylistItem3'
import PlaylistItem4 from './components/PlaylistItem4'
import PlaylistItem5 from './components/PlaylistItem5'
import PlaylistItem6 from './components/PlaylistItem6'
import PlaylistItem7 from './components/PlaylistItem7'
import PlaylistItem8 from './components/PlaylistItem8'
import PlaylistItem9 from './components/PlaylistItem9'
import PlaylistItem10 from './components/PlaylistItem10'
import PlaylistItem11 from './components/PlaylistItem11'
import MainSidebar from './components/MainSidebar'
import SideBarBlock from './components/SideBarBlock'
import BarPlayer from './components/BarPlayer'
import Footer from './components/Footer'

function App() {
  return (
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
                <PlaylistItem1 />
                <PlaylistItem2 />
                <PlaylistItem3 />
                <PlaylistItem4 />
                <PlaylistItem5 />
                <PlaylistItem6 />
                <PlaylistItem7 />
                <PlaylistItem8 />
                <PlaylistItem9 />
                <PlaylistItem10 />
                <PlaylistItem11 />
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
  )
}

export default App
