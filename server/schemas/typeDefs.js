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
    menu: [MenuCategory]!
    orders: [Order!]!
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  } 


`;

module.exports = typeDefs;
