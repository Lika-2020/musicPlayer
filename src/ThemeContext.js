/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const themes = {
  dark: {
    color: '#fff',
    background: 'black',
    moonIcon: faMoon,
    sunIcon: faSun,
    linkColor: '#fff',
    stroke: 'white',
    border: ' 1px solid white',
    backgroundColor: 'white'
    
    
  },
  light: {
    color: 'black',
    background: '#fff',
    moonIcon: faMoon,
    sunIcon: faSun,
    linkColor: 'black',
    stroke: 'black',
    border: '1px solid black',
    backgroundColor: '#AD61FF'
    
  }

}

const defaultTheme = 'dark'

export const ThemeContext = React.createContext({
  theme: themes[defaultTheme],
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
   
  
    setTheme(newTheme);
  }
  
  const isLightTheme = theme === 'light';


  

  const contextValue = useMemo(
    () => ({
      theme: themes[theme],
      toggleTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
