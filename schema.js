import { GraphQLSchema, GraphQLObjectType, GraphQLInt,
  GraphQLString, GraphQLNonNull } from 'graphql';

let integer = 500;

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      integer: {
        type: GraphQLInt,
        resolve: () => 499
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      increment: {
        type: GraphQLInt,
        resolve: () => ++integer
      }
    })
  }),
});

export default schema;
