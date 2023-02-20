import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
query getOrders {
  orders {
    _id
    purchaseDate
    products {
      _id
      name
      price
      quantity
    }
  }
}

`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    name
  }
}
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      isVenueOwner
      phone
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
