require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const { Storage } = require('@google-cloud/storage');

const gcloud = new Storage({
  keyFilename: path.join(__dirname, 'developer-games-back-51fafc813ea9.json'),
  projectId: process.env.GCLOUD_PROJECT_NAME || 'developer-games-back',
});

const devGamesBucket = gcloud.bucket(process.env.GCLOUD_BUCKET_NAME);

// Routers
const authRouter = require('./src/routes/authRouter');
const profileRouter = require('./src/routes/profileRouter');
const teamsRouter = require('./src/routes/teamsRouter');
const tournamentChallengesRouter = require('./src/routes/tournamentChallengesRouter');
const teamChallengesRouter = require('./src/routes/teamChallengesRouter');
const participantsRouter = require('./src/routes/participantsRouter');
const uploadFilesRouter = require('./src/routes/uploadFilesRouter')(devGamesBucket);

const app = express();
const PORT = process.env.PORT || 4200;

// mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(
  'mongodb+srv://developer-games:developer-games@developer-games-cluster.f0myq.mongodb.net/developer-games?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(fileupload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));

app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/tournamentChallenges', tournamentChallengesRouter);
app.use('/api/teamChallenges', teamChallengesRouter);
app.use('/api/participants', participantsRouter);
app.use('/api/upload', uploadFilesRouter);

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

const mailService = require('./src/services/mailService');

app.post('/api/mail', (req, res) => {
  const { email, password } = req.body;
  mailService.sendRegisteredUser(email, password);
  res.send('ok');
});

app.listen(PORT, () => debug(`Server running in port: ${PORT}`));
