import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "../node_modules/antd/dist/reset.css";


import Home from './pages/Home';
import Cart from './pages/Cart';
import Item from './pages/Item';
import Login from './pages/Login';
import CartItems from './pages/CartItems';
import Profile from './pages/Profile';
import Admin from './pages/Admin';


import LoginMain from './components/Login/LoginMain';
import LoginCreate from './components/Login/LoginCreate';
// import LoginLinks from './components/Login/LoginLinks';


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
            path="/cart"
            element={<Cart />}
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


        </Routes>

    </div>

    </Router>
    </ApolloProvider>
  );
}

export default App;
