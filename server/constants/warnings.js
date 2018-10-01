const badSecret = `
----------------------------

*** WARNING ***
Your application is not very secure.
You need to set SERVER_SESSION_SECRET to a better secret
<<<<<<< HEAD
Please follow the README and add a .env file
=======
Please add a .env file with a new secret
>>>>>>> 39eb6b9354881e2874099291089010dee01b8c1f

It should be
- longer than 8 characters
- not "superDuperSecret"

If this warning is showing on Heroku,
add or change your SERVER_SESSION_SECRET environment variable!

----------------------------`;

const exampleBadSecret = 'superDuperSecret';

module.exports = {
  badSecret,
  exampleBadSecret,
};
