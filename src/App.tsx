import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as BaseTheme from './themes/BaseStyle'
import reset from 'styled-reset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { AuthProvider, AuthContext } from './AuthProvider'
import Auth from './Auth'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { WebSocketLink } from 'apollo-link-ws'
import ApolloClient from 'apollo-client'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

/**
 * Header
 */
import Header from './components/Header'

/**
 * pages
 */
import Main from './pages/Main'
import Illust from './pages/Illust'
import Rough from './pages/Rough'
import Commic from './pages/Commic'
import Graffiti from './pages/Graffiti'
import Tag from './pages/Tag'
import Tags from './pages/Tags'
import User from './pages/User'
import Login from './pages/Login'
import Signin from './pages/Signin'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const Container = styled.div`
  padding-top: 4.2rem;
`

function App() {
  const { currentUser } = useContext(AuthContext)

  const isIn = currentUser.status === 'in'

  const headers = isIn ? { Authorization: `Bearer ${currentUser.token}` } : {}

  const httpLink = new HttpLink({
    uri: `http://${process.env.REACT_APP_HASURA_ENDPOINT}`,
    headers,
  })

  const wsLink = new WebSocketLink({
    uri: `wss://${process.env.REACT_APP_HASURA_ENDPOINT}`,
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  })

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

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
                  {/* ここ分ける必要ないかも */}
                  <Main />
                </Route>
                <Route exact path="/illust">
                  <Illust />
                </Route>
                <Route exact path="/rough">
                  <Rough />
                </Route>
                <Route exact path="/commic">
                  <Commic />
                </Route>
                <Route exact path="/graffiti">
                  <Graffiti />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
                <Route exact path="/tags">
                  <Tags />
                </Route>
                <Route path="/tags/:content/:tag">
                  <Tag />
                </Route>
                <Auth>
                  <Switch>
                    <Route path="/user/:user_id/:content">
                      <User />
                    </Route>
                    <Route path="/user/:user_id/">
                      <User />
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
