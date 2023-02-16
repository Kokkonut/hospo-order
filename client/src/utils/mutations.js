import {  gql  } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(
            email: $email, 
            password: $password
            ) {
            token
            user {
                _id
                fullName
            }
        }
    }
    `;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $phone: Int!, $password: String!) {
        addUser(
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            phone: $phone,
            password: $password
            ) {
            token
            user {
                _id
                fullName
            }
        }
    }
    `;
    
