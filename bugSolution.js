const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM users');
    res.send(result);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});