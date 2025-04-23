const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./models');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/task'));
app.use('/api/admin', require('./routes/admin'));

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
});
