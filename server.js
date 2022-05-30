const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();

const crewMemberRoutes = require('./routes/crewMember.routes');
const PORT = process.env.PORT || 4501;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/member', crewMemberRoutes);




app.listen(PORT,  () => {
    console.log("App listening on port " + PORT)
})