require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');

// Routers
const authRouter = require('./src/routes/authRouter');
const profileRouter = require('./src/routes/profileRouter');
const teamsRouter = require('./src/routes/teamsRouter');
const tournamentChallengesRouter = require('./src/routes/tournamentChallengesRouter');
const teamChallengesRouter = require('./src/routes/teamChallengesRouter');

const app = express();
const PORT = process.env.PORT || 4200;

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(fileupload());

app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/tournamentChallenges', tournamentChallengesRouter);
app.use('/api/teamChallenges', teamChallengesRouter);

// !! IMPORTANT DELETE THIS METHOD !!
app.delete('/api/reset', (req, res) => {
  // eslint-disable-next-line global-require
  const teamChallengeModel = require('./src/models/teamChallengeModel');
  // eslint-disable-next-line global-require
  const teamModel = require('./src/models/teamModel');
  // eslint-disable-next-line global-require
  const participantModel = require('./src/models/participantModel');

  teamChallengeModel.collection.drop();
  teamModel.collection.drop();
  participantModel.collection.drop();

  res.send('done');
});

app.listen(PORT, () => debug(`Server running in port: ${PORT}`));
