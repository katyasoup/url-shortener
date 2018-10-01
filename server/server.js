const express = require('express');
const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD
=======
const env = require('dotenv').config();
>>>>>>> 39eb6b9354881e2874099291089010dee01b8c1f

const passport = require('./strategies/sql.localstrategy');
const sessionConfig = require('./modules/session-middleware');

// Route includes
const userRouter = require('./routes/user.router');
<<<<<<< HEAD
=======
const urlRouter = require('./routes/url.router');
>>>>>>> 39eb6b9354881e2874099291089010dee01b8c1f

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
<<<<<<< HEAD
=======
app.use('/api/url', urlRouter);
>>>>>>> 39eb6b9354881e2874099291089010dee01b8c1f

// Serve static files
app.use(express.static('server/public'));

<<<<<<< HEAD
const PORT = process.env.PORT || 5001;
=======
const PORT = process.env.PORT || 5000;
>>>>>>> 39eb6b9354881e2874099291089010dee01b8c1f

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
