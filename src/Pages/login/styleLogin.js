import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.85);
`;
export const LoginDiv = styled.div`
  position: absolute;
  width: 366px;
  height: 439px;
  left: 777px;
  top: 320.5px;
  background: #ffffff;
  border-radius: 12px;
`;
export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 43px;
  padding-bottom: 47px;
`;
export const LogoImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
export const LogPassDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;
export const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  width: 278px;
  margin-left: 40px;
  height: 30px;
  margin-bottom: 38px;

  &::placeholder {
    font-family: "StratosSkyeng";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #e1e1e1;
  }
`;
export const PasswordInput = styled(LoginInput)`
 margin-bottom: 0
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;
  align-items: center;
`;
export const EnterButton = styled.button`
width: 278px;
height: 52px;
border: none;
background: #580EA2;
border-radius: 6px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.003em;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #FFFFFF;
&:hover{
    background: #3F007D;
}
&:active{
    background: #271A58;
}
`
export const RegistrationButton = styled(EnterButton)`

`
