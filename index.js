const express = require('express');

const indexRouter = require('./routes/index')


const app = express();
const port = 8001; 

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  //teste
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  //rotas
  app.use('/', indexRouter);