const { gql } = require("apollo-server");

const userInputs = gql`
  input CreateUserInput {
    name: String!
    userName: String!
    age: Int!
    email: String!
    nationality: Nationality = INDIA
  }
`;
module.exports = { userInputs };
