const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    venueCreated: String!
    menus: [Menu]
    tradingHours: [TradingHours]
  }
  
  type TradingHours {
    dayOfWeek: String!
    openTime: String!
    closeTime: String!
    closed: Boolean!
  }
  
  type Menu {
    _id: ID!
    name: String!
    description: String
    menuCreated: String!
    menuCategory: [MenuCategory]
  }
  
  type MenuCategory {
    _id: ID!
    name: String!
    description: String
    menuItems: [MenuItem]
  }
  
  type MenuItem {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    itemCreated: String!
    imgLocation: String
    modifier_group: ModifierGroup
  }
  
  type ModifierGroup {
    _id: ID!
    name: String!
    price: Float!
  }
  type Modifier {
    _id: ID!
    name: String!
    price: Float!
    }

  type Query {
    venues: [Venue]
    venue(id: ID!): Venue
    menus: [Menu]
    menu(id: ID!): Menu
    menuCategories: [MenuCategory]
    menuCategory(id: ID!): MenuCategory
    menuItems: [MenuItem]
    menuItem(id: ID!): MenuItem
    modifierGroups: [ModifierGroup]
    modifierGroup(id: ID!): ModifierGroup
  }
  
  type Mutation {
    createVenue(input: VenueInput!): Venue!
    updateVenue(id: ID!, input: VenueInput!): Venue!
    deleteVenue(id: ID!): Venue
    createMenu(input: MenuInput!): Menu!
    updateMenu(id: ID!, input: MenuInput!): Menu!
    deleteMenu(id: ID!): Menu
    createMenuCategory(input: MenuCategoryInput!): MenuCategory!
    updateMenuCategory(id: ID!, input: MenuCategoryInput!): MenuCategory!
    deleteMenuCategory(id: ID!): MenuCategory
    createMenuItem(input: MenuItemInput!): MenuItem!
    updateMenuItem(id: ID!, input: MenuItemInput!): MenuItem!
    deleteMenuItem(id: ID!): MenuItem
    createModifierGroup(input: ModifierGroupInput!): ModifierGroup!
    updateModifierGroup(id: ID!, input: ModifierGroupInput!): ModifierGroup!
    deleteModifierGroup(id: ID!): ModifierGroup
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
    menus: [ID!]
    tradingHours: [TradingHoursInput!]
  }
  
  input TradingHoursInput {
    dayOfWeek: String!
    openTime: String!
    closeTime: String!
    closed: Boolean!
  }
  
  input MenuInput {
    name: String!
    description: String
    menuCategory: [ID!]
  }
  
  input MenuCategoryInput {
    name: String!
    description: String
    menuItems: [ID!]
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
    price: Float!
  }
    `
    module.exports = typeDefs;
