const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    // schema: schema,
    // graphiql: true,
  }),
);
app.listen(8000, () => {
  console.log("server ready at 8000");
});
