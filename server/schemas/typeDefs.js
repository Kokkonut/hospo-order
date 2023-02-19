const { gql } = require('apollo-server-express');

const typeDefs = gql`


input VenueInput {
  name: String!
  address: String!
  city: String!
  state: String!
  zip: Int!
  phone: String
  email: String!
  website: String
  instagram: String
  facebook: String
  twitter: String
  
}

input MenuCategoryInput {
  name: String!
  description: String!
  venue: ID!
}

input MenuItemInput {
  name: String!
  description: String!
  price: Float!
  imgLocation: String!
  menuCategory: ID!
}

input ModifierGroupInput {
  name: String!
  description: String!
  menuItem: ID!
}

input ModifierInput {
  name: String!
  price: Float!
  modifierGroup: ID!
}

type Auth {
  token: ID!
  user: User
  }

type User {
  _id: ID!
  firstName: String!
  lastName: String!
  email: String!
  phone: Int!
  password: String!
  fullName: String
  isVenueOwner: Boolean!
  }

type Venue {
  id: ID!
  name: String!
  address: String!
  city: String!
  state: String!
  zip: Int!
  phone: String
  email: String!
  website: String
  instagram: String
  facebook: String
  twitter: String
  menuCategories: [MenuCategory]
}

type TradingHours {
  dayOfWeek: String!
  openTime: String!
  closeTime: String!
  closed: Boolean!
}

type MenuCategory {
  id: ID!
  name: String!
  description: String!
  venue: [Venue]
  menuItems: [MenuItem]!
}

type MenuItem {
  id: ID!
  name: String!
  description: String!
  price: Float!
  imgLocation: String!
  menuCategory: MenuCategory!
  modifierGroups: [ModifierGroup]!
}

type ModifierGroup {
  id: ID!
  name: String!
  description: String!
  menuItem: MenuItem!
  modifiers: [Modifier]!
}

type Modifier {
  id: ID!
  name: String!
  price: Float!
  modifierGroup: ModifierGroup!
}

type AllDetails {
  venues: [Venue]
  menuCategories: [MenuCategory]
  menuItems: [MenuItem]
  modifierGroups: [ModifierGroup]
  modifiers: [Modifier]
}

type Query {
  venues: [Venue]!

  allDetails: AllDetails
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, phone: Int!, password: String!): Auth
  login(email: String!, password: String!): Auth
  createVenue(input: VenueInput!): Venue
  createMenuCategory(input: MenuCategoryInput!): MenuCategory
  createMenuItem(input: MenuItemInput!): MenuItem
  createModifierGroup(input: ModifierGroupInput!): ModifierGroup
  createModifier(input: ModifierInput!): Modifier
} 


`;

module.exports = typeDefs;
