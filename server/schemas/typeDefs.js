const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date

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
type MenuItem {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    imgLocation: String
    modifier_group: ModifierGroup
  }
  
  type ModifierGroup {
    _id: ID!
    name: String!
    description: String
    modifiers: [Modifier!]!
  }
  
  type Modifier {
    _id: ID!
    name: String!
    price: Float!
  }
  
  type MenuCategory {
    _id: ID!
    name: String!
    description: String
    menuItems: [MenuItem!]!
  }
  
  type Venue {
    _id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    zip: Int!
    phone: Int
    email: String!
    website: String
    instagram: String
    facebook: String
    twitter: String
    menu_category: [MenuCategory!]!
    tradingHours: [TradingHours!]!
  }
  
  type TradingHours {
    dayOfWeek: String!
    openTime: String!
    closeTime: String!
    closed: Boolean!
  }
  
  type Query {
    getMenuCategoryById(id: ID!): MenuCategory
    getAllMenuCategories: [MenuCategory!]!
    getMenuItemById(id: ID!): MenuItem
    getAllMenuItems: [MenuItem!]!
    getModifierGroupById(id: ID!): ModifierGroup
    getAllModifierGroups: [ModifierGroup!]!
    getModifierById(id: ID!): Modifier
    getAllModifiers: [Modifier!]!
    getVenueById(id: ID!): Venue
    getAllVenues: [Venue!]!
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: Int!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createMenuCategory(input: MenuCategoryInput!): MenuCategory!
    updateMenuCategory(id: ID!, input: MenuCategoryInput!): MenuCategory!
    deleteMenuCategory(id: ID!): MenuCategory!
    createMenuItem(input: MenuItemInput!): MenuItem!
    updateMenuItem(id: ID!, input: MenuItemInput!): MenuItem!
    deleteMenuItem(id: ID!): MenuItem!
    createModifierGroup(input: ModifierGroupInput!): ModifierGroup!
    updateModifierGroup(id: ID!, input: ModifierGroupInput!): ModifierGroup!
    deleteModifierGroup(id: ID!): ModifierGroup!
    createModifier(input: ModifierInput!): Modifier!
    updateModifier(id: ID!, input: ModifierInput!): Modifier!
    deleteModifier(id: ID!): Modifier!
    createVenue(input: VenueInput!): Venue!
    updateVenue(id: ID!, input: VenueInput!): Venue!
    deleteVenue(id: ID!): Venue!
  }
  
  input MenuItemInput {
    name: String!
    description: String!
    price: Float!
    imgLocation: String
    modifier_group: ID
  }
  
  input ModifierGroupInput {
    name: String!
    description: String
  }
  
  input ModifierInput {
    name: String!
    price: Float!
  }
  
  input MenuCategoryInput {
    name: String!
    description: String
  }
  
  input VenueInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zip: Int!
    phone: Int
    email: String!
    website: String
    instagram: String
    facebook: String
    twitter: String
    tradingHours: [TradingHoursInput!]!
  }
  
  input TradingHoursInput {
    dayOfWeek: String!
    openTime: String!
    closeTime: String!
    closed: Boolean!
  }
  
`;

module.exports = typeDefs;
