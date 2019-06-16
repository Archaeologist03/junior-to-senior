const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var winston = require('winston');
const helmet = reqire('helment');


const bodyParser = require('body-parser');
const app = express();

app.use(helmet())
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

var whitelist = ['http://example1.com', 'http://example2.com', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', (req, res) => {
  // res.cookie('session', '1', { httpOnly: true });
  // res.cookie('session', '1', { secure: true });
  // res.set({
  //   'Content-Security-Policy': "script-src 'self' 'https:/apis.google.com'",
  // });
  
  res.send('Hello World!');
});

app.post('/secret', (req, res) => {
  const { userInput } = req.body;
  console.log(userInput);

  if (userInput) {
    winston.log('info', 'user input: ' + userInput);
    res.status(200).json('success');
  } else {
    winston.error('This guy is messing with us:' + userInput);
    res.status(400).json('incorrect submission');
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
