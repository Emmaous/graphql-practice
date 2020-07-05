const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin requests
app.use(cors());

//connect to mlab database
mongoose .connect(
    "mongodb+srv://Avatah:blue2583@graphql-avatah-upcfd.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
   )
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch(err => console.log("Error: ", err.message));

   


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening on port 4000")
})