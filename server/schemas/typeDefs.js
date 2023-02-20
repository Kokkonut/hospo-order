const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    password: String!
    fullName: String
    isVenueOwner: Boolean!
  }

  type Venue {
    _id: ID!
    name: String!
    address: String!
    phone: String!
    email: String!
    menu: [category]
  }

  type category {
    name: String!
    items: [item]
  }

  type item {
    name: String!
    price: Float!
    description: String
    modifiers: [modifier]
  }

  type modifier {
    name: String!
    price: Float!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addVenue(name: String!, address: String!, phone: String!, email: String!): Venue
  } 

  type Query {
    hello: String

    getVenues: [Venue]

  }


`;

module.exports = typeDefs;
