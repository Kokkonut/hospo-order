const { gql } = require('apollo-server-express');

//NOTES: have only added the subscription type

const typeDefs = gql`
  type ProductID {
    id: ID!
    name: String
    description: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    orderBy: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    status: String
    orderBy: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    phone: String
    isVenueOwner: Boolean
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    getOrders: [Order]
    productID(_id: ID!): ProductID!
    
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phone: String): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, phone: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    updateOrderStatus(_id: ID!, status: String!): Order
  }
`;

module.exports = typeDefs;
