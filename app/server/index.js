const path = require('path');
const express = require('express');

const config = {
  port: 8802,
};

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('*', (req, res, next) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}/`);
});
