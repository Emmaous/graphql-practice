const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose .connect(
    "mongodb+srv://Avatah:blue2583@graphql-avatah-upcfd.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
   )
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch(err => console.log("Error: ", err.message));

const app = express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("now listening on port 3000")
})