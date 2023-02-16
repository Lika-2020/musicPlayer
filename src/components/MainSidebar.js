import * as S from './MainSidebar.styled'

function MainSidebar() {
  return (
    <div>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar />
      </S.SidebarPersonal>
    </div>
  )
}

export default MainSidebar
