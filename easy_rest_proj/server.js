const express = require('express');

const userRouter = require('./routes/user.routes.js')

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log('\n=== SERVER STARTED === | ' + 'PORT: ' + PORT + ' |');
});