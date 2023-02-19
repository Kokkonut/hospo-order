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

  type Menu {
    _id: ID!
    title: String!
    categories: [MenuCategory]!
  }

  type MenuCategory {
    _id: ID!
    title: String!
    menuItems: [MenuItem]!
  }
  
  type MenuItem {
    _id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Order {
    _id: ID!
    user: User!
    venue: Venue!
    items: [OrderItem!]!
    status: OrderStatus!
    createdAt: String!
  }
  
  type OrderItem {
    id: ID!
    menuItem: MenuItem!
    quantity: Int!
    notes: String
  }
  
  type OrderStatus {
    id: ID!
    name: String!
  }

  type Query {
    venues: [Venue!]!
    orders: [Order!]!
    order(id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(user: ID!, venue: ID!, items: [OrderItemInput!]!): Order
    updateOrderStatus(id: ID!, status: ID!): Order
    addVenue(name: String!, address: String!, phone: String!, email: String!): Venue
    addMenu(venue: ID!, title: String!): Menu
    addMenuCategory(menu: ID!, title: String!): MenuCategory
    addMenuItem(menuCategory: ID!, name: String!, description: String!, price: Float!): MenuItem


  } 

  input OrderItemInput {
    menuItem: ID!
    quantity: Int!
  }

`;

module.exports = typeDefs;
