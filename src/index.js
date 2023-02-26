import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
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
  color: white;
}



// ========== hover ========
._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
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

  <BrowserRouter>
    <Global />

    <App  />
   
  </BrowserRouter>

)
