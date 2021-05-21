require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const debug = require('debug')('app');
const mongoose = require('mongoose');

// Routers
const authRouter = require('./src/routes/authRouter');
const teamsRouter = require('./src/routes/teamsRouter');

const app = express();
const PORT = process.env.PORT || 4200;

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api/auth', authRouter);
app.use('/api/teams', authRouter);

app.listen(PORT, () => debug(`Server running in port: ${PORT}`));
