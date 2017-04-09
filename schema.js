import { GraphQLSchema, GraphQLObjectType,
         GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

let integer = 600;

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      integer: {
        type: GraphQLInt,
        resolve: () => integer
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      increment: {
        type: GraphQLInt,
        resolve: () => integer++
      }
    })
  }),
});

export default schema;
