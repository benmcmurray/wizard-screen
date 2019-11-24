// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  type Post {
    _id: ID,
    title: String,
    content: String
  },
  type User {
    _id: ID,
    name: String,
    init: String,
    email: String,
    password: String,
    created: Date,
    login: Date,
    access: Date,
    status: Number
  },
  type Query {
    posts: [Post],
    user: [User]
  },
  type Mutation {
    addPost(title: String!, content: String!): Post,
    addUser(name: String!, init: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;