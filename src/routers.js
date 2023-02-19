import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/login/login'
import Main from './Pages/main/main'
import MyTracks from './Pages/playlistOfTheDay/myTracks/myTracks'
import PlaylistOfTheDay from './Pages/playlistOfTheDay/playlistOfTheDay'

import Registration from './Pages/registration/registration'


function AppRouters() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/main" element={<Main />} />
      <Route path="/playlistOfTheDay" element={<PlaylistOfTheDay />} />
      <Route path='/myTracks' element={<MyTracks />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouters
