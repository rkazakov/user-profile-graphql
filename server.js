import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './schema';

let app = express();

app.use('/graphql', GraphQLHTTP({
  schema,
  graphiql: true
}));

app.listen(8000);
