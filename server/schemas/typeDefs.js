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
    menu: [MenuCategory!]!
  }
  
  type MenuCategory {
    name: String!
    items: [MenuItem!]!
  }
  
  type MenuItem {
    name: String!
    description: String!
    price: Float!
    size: [Size!]!
    howToasted: [ToastingLevel!] # Only used for toast items
    toppings: [Topping!] # Only used for toast items
  }
  
  type Size {
    name: String!
    value: Float!
  }
  
  type ToastingLevel {
    name: String!
    value: Float!
  }
  
  type Topping {
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
  }


`;

module.exports = typeDefs;
