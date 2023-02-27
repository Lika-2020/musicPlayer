import styled from 'styled-components'

export const MainCenterblockCenterblock = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterblockFilterFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  &.filter__button {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: ${({ theme }) => theme.border};
    border-radius: 60px;
    padding: 6px 20px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &.button-author {
  }

  &._btn-text {
    &.active {
      border-color: #ad61ff;
      color: #ad61ff;
      cursor: pointer;
    }
  }
`
export const Modal = styled.div`
  width: 248px;
  height: 305px;
  background: #313131;
  border-radius: 12px;
  padding-top: 36px;
  padding-bottom: 36px;
  margin-bottom: 36px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  color: #ffffff;
  ::-webkit-scrollbar {
    width: 4px;
    background: #4b4949;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    width: 4px;
    background: #ffffff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    height: 107px;
  }
`
export const Year = styled.div`
  width: 403px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background: #313131;
  border-radius: 12px;
  color: #ffffff;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

export const RadioLabel = styled.label`
  display: block;
  font-family: 'StratosSkyeng';
  margin-bottom: 10px;
  font-size: 16px;
  color: white;

  & input {
    margin-right: 10px;
  }
`

export const RadioInput = styled.input`
  &:checked + span {
    /* Стили для состояния "checked" */

    color: #4e4e4e;
    font-weight: bold;
  }

  & + span {
    /* Стили для текста */

    color: white;
  }

  /* Стили для иконки */

  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #4e4e4e;
  border-radius: 50%;
  position: relative;
  top: 3px;
  margin-right: 10px;
  transition: all 0.2s ease;

  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4e4e4e;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:checked + span:after {
    opacity: 1;
  }
`
