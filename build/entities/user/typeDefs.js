"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  # Scalars
  scalar ObjectId
  scalar DateTime

  # Types
  type User {
    _id: ObjectId
    firstname: String
    lastname: String
    email: String
    role: Auth
    fidelity: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## User by id/field
  type UserBy {
    entity: User!
  }
  ## All Users
  type Users {
    entities: [User!]!
  }
  ## Updated User
  type UserUpdated {
    entity: User!
    message: String!
  }
  ## Deleted User
  type UserDeleted {
    entity: User!
    message: String!
  }
  ## Not found
  type UserNotFound {
    message: String!
  }

  # Inputs
  input UserUpdatedInput {
    firstname: String
    lastname: String
    fidelity: Int
  }

  # Unions
  union UserResult = UserBy | UserNotFound
  union UsersResult = Users | UserNotFound
  union UserUpdatedResult = UserUpdated | UserNotFound
  union UserDeletedResult = UserDeleted | UserNotFound

  # Queries
  type Query {
    getAllUsers(sort: SortInput, filter: FilterInput, paginate: PaginationInput): UsersResult!
    getUserById(id: ObjectId!): UserResult!
    getUserByField(field: String!, value: String!): UserResult!
  }

  # Mutations
  type Mutation {
    updateUser(id: ObjectId!, input: UserUpdatedInput!): UserUpdatedResult!
    deleteUser(id: ObjectId!): UserDeletedResult!
  }
`;
//# sourceMappingURL=typeDefs.js.map