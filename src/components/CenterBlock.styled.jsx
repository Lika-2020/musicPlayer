import styled from 'styled-components'

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SVGSearch = styled.svg`
  width: 17px;
  height: 18px;
  fill: none;
  path {
    stroke: ${({ theme }) => theme.stroke};
    stroke-linecap: round;
  }
  circle {
    stroke: ${({ theme }) => theme.stroke};
  }
`

 export const SearchInput = styled.input`
  &.search__text {
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`
