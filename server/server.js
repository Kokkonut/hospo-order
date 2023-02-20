const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const { execute, subscribe } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { PubSub } = require('graphql-subscriptions');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3003;



const pubsub = new PubSub();

const app = express();
const httpServer = http.createServer(app);

// Create a new WebSocket server for subscriptions
const subscriptionServer = SubscriptionServer.create(
  {
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    execute,
    subscribe,
    onConnect: (connectionParams) => {
      // Optional: authenticate the user
      return connectionParams;
    },
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
  subscriptions: {
    path: '/subscriptions',
    onConnect: (connectionParams) => {
      // Optional: authenticate the user
      return connectionParams;
    },
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      console.log(`Use subscriptions at ws://localhost:${PORT}${server.subscriptionsPath}`);
    });
  });
};

startApolloServer();
