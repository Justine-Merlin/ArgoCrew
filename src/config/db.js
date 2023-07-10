const mongoose = require('mongoose');
const DB_ACCESS = process.env.DB_PASSWORD;

mongoose
    .connect("mongodb+srv://" + DB_ACCESS + "@cluster0.jxsfx.mongodb.net/crewProject",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to Database'))
    .catch((err) => console.log('Connection failed', err))