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
import Tag from './pages/Tag'
import Tags from './pages/Tags'
import MyPage from './pages/MyPage'
import Home from './pages/Home'

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
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/mypage/:id">
            <MyPage />
          </Route>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route path="/tags/:tag">
            <Tag />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
