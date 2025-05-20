const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    email: String!
    friends: [User]
    favoriteMovies: [Movie]
    nationality: Nationality!
  }
  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
    rating: Float!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  input CreateUserInput {
    name: String!
    userName: String!
    age: Int!
    email: String!
    nationality: Nationality = INDIA
  }

  input UpdateUserInput {
    id: ID!
    name: String
    userName: String
    age: Int
    email: String
    nationality: Nationality
  }
  input DeleteUserInput {
    id: ID!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(input: DeleteUserInput!): User
  }

  enum Nationality {
    INDIA
    USA
    CHINA
    CANADA
    GERMANY
  }
`;

module.exports = { typeDefs };
