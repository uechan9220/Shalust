import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as BaseTheme from './themes/BaseStyle'
import reset from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

/**
 * pages
 */
import Main from './pages/Main'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
