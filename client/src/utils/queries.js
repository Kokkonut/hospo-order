import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
      _id
      products {
        name
        quantity
      }
      purchaseDate
      status
      orderBy {
        _id
        firstName
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
        _id
        name
      }
    }
  }
`;

// export const QUERY_ALL_PRODUCTS = gql`
//   query Product {
//     products {
//       category {
//         name
//         _id
//       }
//       name
//       price
//       description
//       _id
//     }
//   }
//   `;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
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

export const QUERY_ME = gql`
 query me {
    me {
      _id
      email
      firstName
      lastName
      phone
    }
  }
`;
