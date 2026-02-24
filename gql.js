const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const User = require("./models/user");

// 1. Define Schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!, email: String!): User
  }
`);


const root = {
 
  getUsers: async () => {
    return await User.find();
  },

  getUser: async ({ id }) => {
    return await User.findById(id);
  },

  addUser: async ({ name, age, email }) => {
    const user = new User({ name, age, email });
    return await user.save();
  },
};

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});