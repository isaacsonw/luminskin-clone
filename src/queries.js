import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query products($currencyValue: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currencyValue)
    }
    currency
  }
`;
export const GET_CURRENCY = gql`
  query currency {
    currency
  }
`;
