import express from 'express';
const app = express();

// You can add body-parser, routes, etc. later

app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to CRUD API tutorial!</h1>
    `);
  });

  export default app;