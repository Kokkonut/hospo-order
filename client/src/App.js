import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/Admin';


import LoginMain from './components/Login/LoginMain';
import LoginCreate from './components/Login/LoginCreate';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Success from './pages/Success';
// import LoginLinks from './components/Login/LoginLinks';

import MyProfile from './components/Profile/MyProfile';
import History from './components/Profile/History';
import UpdateProfile from './components/Profile/UpdateProfile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ShoppingCartProvider>
    <ApolloProvider client={client}>
 
        <Router>
          <div className="App">
            <header className="App-header"></header>
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />

              <Route
                path="/login"
                element={<LoginMain />}
              />

              <Route
                path="/signup"
                element={<LoginCreate />}
              />

              <Route
                path="/home"
                element={<Home />}
              />

              <Route
                path="/admin"
                element={<Admin />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/success"
                element={<Success />}
              />

        <Route
            path="/item"
            element={<Item />}
          />

        <Route
            path="/cartitems"
            element={<CartItems />}
          />

        <Route
            path="/admin"
            element={<Admin />}
          />

              <Route
                path="/profile"
                element={<Profile />}
              />

        <Route
            path="/myprofile"
            element={<MyProfile />}
          />

        <Route
            path="/history"
            element={<History />}
          />

        <Route
            path="/updateprofile"
            element={<UpdateProfile />}
        />

            </Routes>
          </div>
        </Router>
    </ApolloProvider>
    </ShoppingCartProvider>
  );
}

export default App;
