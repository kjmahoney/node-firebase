const firebase = require('firebase');
const database = firebase.database();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.get('/', (request, response) => {
  let wordRef = database.ref("/");

  console.log(wordRef);

  response.render('home.ejs');
})

app.post('/', (request, response) => {
  let chinese = request.body.chinese;

  response.render('results.ejs', {data: chinese})
})

app.listen(port, () => {
  console.log(`App Running on ${port}`);
})
