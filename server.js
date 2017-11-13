const express = require('express');
const app = express();

const port = 4000;

app.get('/', (request, response) => {
  response.send('<h1>Cheeseburger</h1>');
})

app.listen(port, () => {
  console.log(`App Running on ${port}`);
})
