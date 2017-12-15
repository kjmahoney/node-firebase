const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

//DB
const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyC8j4JVy9MJj4nwXUUldC3dYW68KxFhcVk",
  authDomain: "chinese-37eef.firebaseapp.com",
  databaseURL: "https://chinese-37eef.firebaseio.com",
  projectId: "chinese-37eef",
  storageBucket: "chinese-37eef.appspot.com",
  messagingSenderId: "966769493570"
};
firebase.initializeApp(config);

const database = firebase.database();

//App
app.set('view engine', 'ejs');

app.use(express.static('views'));
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.get('/', (request, response) => {
  let wordRef = database.ref("/");

  wordRef.on('value', (snapshot) => {
    console.log(snapshot.val());
    response.render('home.ejs', { words: snapshot.val() });
  })
})

app.post('/', (request, response) => {
  let chinese = request.body.chinese;

  response.render('results.ejs', {data: chinese})
})

app.listen(port, () => {
  console.log(`App Running on ${port}`);
})
