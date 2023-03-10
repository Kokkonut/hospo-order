import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phone: $phone
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser(
  $firstName: String
  $lastName: String
  $email: String
  $phone: String
) {
  updateUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    phone: $phone
  ) {
    _id
    firstName
    lastName
    email
    phone
  }
}
`
export const UPDATE_ORDER_STATUS = gql`
mutation updateOrderStatus($_id: ID!, $status: String!) {
  updateOrderStatus(_id: $_id, status: $status) {
    _id
    status
  }
}
`