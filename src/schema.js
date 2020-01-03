const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  """
  Input arguments are used to filter the data
  """
  
  input BookInput {
    title: String
    author: String
  }

  type Query {
    books(input: BookInput): [Book]
  }
`;

module.exports = typeDefs;
