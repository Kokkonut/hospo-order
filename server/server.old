const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const upload = require('./utils/upload');

// const socketio = require('socket.io');

const PORT = process.env.PORT || 3003;

const app = express();
const httpServer = http.createServer(app);
// const io = socketio(httpServer);

// web socket server
const wsServer = new SubscriptionServer(
  {
    execute,
    subscribe,
    schema: new ApolloServer({
      typeDefs,
      resolvers,
      context: authMiddleware,
    }).schema,
  },
  {
    server: httpServer,
    path: '/subscriptions',
  }
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    httpServer.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Use subscriptions at ws://localhost:${PORT}${wsServer.subscriptionsPath}`);
  });
};

startApolloServer(typeDefs, resolvers);
