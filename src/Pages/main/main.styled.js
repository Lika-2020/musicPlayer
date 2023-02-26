import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const Main = styled.div`
display: flex`




export const MainCenterBlock = styled.div`
  width: auto;
  padding: 20px 40px 20px 111px;
  grid-column: 1 / 2;
`

export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentPlaylistPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const MainSidebarSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
  padding-right: 150px;
`
export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
