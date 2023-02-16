import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}


button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

.active {
  color: #b672ff;
  border-color: #b672ff;
}

//-------------------------------//

// ========== fonts ========
@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('../fonts/StratosSkyeng.woff2') format('woff2'),
    url('../fonts/StratosSkyeng.woff') format('woff'),
    url('../fonts/StratosSkyeng.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

//--------------------------

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

.container {
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
}

// ========== hover ========
._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}
.main__centerblock {
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
}

.centerblock__content {
    display: flex;
    flex-direction: column;
}

.content__playlist {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.main__sidebar  {
    max-width: 418px;
    padding: 20px 90px 20px 78px;
}

.bar {
    position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
}

.bar__content {
    display: flex;
    flex-direction: column;
}

.bar__player-block {
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.skeleton-items {
  display: flex;
  flex-direction: row;
}

.skeleton-sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 250px;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Global />
    <App />
  </>
)
