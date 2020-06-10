import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as BaseTheme from './themes/BaseStyle'
import reset from 'styled-reset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { AuthProvider } from './AuthProvider'
import Auth from './Auth'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

/**
 * Header
 */
import Header from './components/Header'

/**
 * pages
 */
import Main from './pages/Main'
import Tag from './pages/Tag'
import Tags from './pages/Tags'
import MyPage from './pages/MyPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const Container = styled.div`
  padding-top: 4.2rem;
`

const createApolloClient = (authToken: any) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://hasura.io/learn/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}

function App({ idToken }: any) {
  const client = createApolloClient(idToken)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={BaseTheme}>
        <GlobalStyle />
        <Router>
          <AuthProvider>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
                <Auth>
                  <Switch>
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
                </Auth>
              </Switch>
            </Container>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
