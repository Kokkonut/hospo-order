
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import LoginMain from './components/Login/LoginMain';
import LoginCreate from './components/Login/LoginCreate';
// import LoginLinks from './components/Login/LoginLinks';
=======
import Home from './pages/Home';
>>>>>>> 68c937b369d28774e5fc63ff1e1a6ef64df1eaf4

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

      <header className="App-header">
      </header>
      <Routes>
      <Route
          path="/"
          element={<Login />}
        />
<<<<<<< HEAD
      <Route
          path="/login"
          element={<LoginMain />}
        />
      <Route
          path="/signup"
          element={<LoginCreate />}
        />
              {/* <Route 
                path="/" 
                element={<Home />} 
              /> */}
=======
      <Route 
           path="/" 
           element={<Home />} 
        />
>>>>>>> 68c937b369d28774e5fc63ff1e1a6ef64df1eaf4
                  </Routes>
    </div>
            </Router>
          </ApolloProvider>
  );
}

export default App;
