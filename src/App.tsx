import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as BaseTheme from './themes/BaseStyle';
import reset from 'styled-reset';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { AuthProvider, AuthContext } from './AuthProvider';
import Auth from './Auth';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from '@apollo/react-hooks';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { MuiThemeProvider } from '@material-ui/core/styles';

/**
 * Header
 */
import Header from './components/Header';

/**
 * pages
 */
import Main from './pages/Main';
import Illust from './pages/Illustratio';
import Rough from './pages/Rough';
import Commic from './pages/Commic';
import Graffiti from './pages/Graffiti';
import Tag from './pages/Tag';
import Tags from './pages/Tags';
import User from './pages/User';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Content from './pages/Content';
import CreateUser from './pages/CreateUser';
import PostManagement from './pages/PostManagement';
import { MaterialTheme } from './themes/MaterialTheme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const Container = styled.div`
  padding-top: 4.2rem;
`;

function App() {
  const { currentUser } = useContext(AuthContext);

  const isIn = currentUser.status === 'in';

  const BearerToken = isIn ? currentUser.token : null;

  // const httpLink = new HttpLink({
  //   // uri: `http://${process.env.REACT_APP_HASURA_ENDPOINT}`,
  //   uri: `http://localhost:8080/api/`,
  //   headers,
  // })

  const restLink = new RestLink({
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      user_id: `Bearer ${BearerToken}`,
      Accept: 'application/json',
      'cache-control': 'no-cache',
    },
    uri: `http://localhost:8080/api/`,
  });

  // const wsLink = new WebSocketLink({
  //   // uri: `wss://${process.env.REACT_APP_HASURA_ENDPOINT}`,
  //   uri: `wss://localhost:8080/api/`,
  //   options: {
  //     reconnect: true,
  //     connectionParams: {
  //       headers,
  //     },
  //   },
  // })

  // const link = split(
  //   // split based on operation type
  //   ({ query }) => {
  //     const definition = getMainDefinition(query)
  //     return (
  //       definition.kind === 'OperationDefinition' &&
  //       definition.operation === 'subscription'
  //     )
  //   },
  //   wsLink,
  //   restLink
  // )

  const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={MaterialTheme}>
        <ThemeProvider theme={BaseTheme}>
          <GlobalStyle />
          <Router>
            <AuthProvider>
              <Header />
              <Container>
                <Switch>
                  <Route exact path='/'>
                    {/* ここ分ける必要ないかも */}
                    <Main />
                  </Route>
                  <Route exact path='/illustratio'>
                    <Illust />
                  </Route>
                  <Route exact path='/rough'>
                    <Rough />
                  </Route>
                  <Route exact path='/commic'>
                    <Commic />
                  </Route>
                  <Route exact path='/graffiti'>
                    <Graffiti />
                  </Route>
                  <Route exact path='/illustratio/:content_id'>
                    <Content />
                  </Route>
                  <Route exact path='/rough/:content_id'>
                    <Content />
                  </Route>
                  <Route exact path='/commic/:content_id'>
                    <Content />
                  </Route>
                  <Route exact path='/graffiti/:content_id'>
                    <Content />
                  </Route>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/signin'>
                    <Signin />
                  </Route>
                  <Route exact path='/tags'>
                    <Tags />
                  </Route>
                  <Route path='/tags/:content/:tag'>
                    <Tag />
                  </Route>
                  <Route path='/post_management/:content'>
                    <PostManagement />
                  </Route>
                  <Auth>
                    <Switch>
                      <Route path='/create_user'>
                        <CreateUser />
                      </Route>
                      <Route exact path='/user/:user_id/:content'>
                        <User />
                      </Route>
                      <Route exact path='/user/:user_id/'>
                        <User />
                      </Route>
                    </Switch>
                  </Auth>
                </Switch>
              </Container>
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
