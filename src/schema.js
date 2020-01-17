const { gql } = require("apollo-server");

const typeDefs = gql`
  """
  Input arguments are used to filter the data based on title and author name
  """
  input BookInput {
    title: String
    author: String
  }

  input CreateBookInput {
    title: String
    author: String
  }

  input UpdateBookInput {
    id: ID!
    title: String
    author: String
  }

  input DeleteBookInput {
    id: ID!
  }

  type Author {
    name: String!
    books: [Book]
  }

  type Book {
    title: String!
    author: Author!
    id: ID!
  }

  type Query {
    books(input: BookInput): [Book]
  }

  type Mutation {
    createBook(input: CreateBookInput): Book
    updateBook(input: UpdateBookInput): Book
    deleteBook(input: DeleteBookInput): ID
  }
`;

module.exports = typeDefs;
