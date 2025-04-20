import express from 'express';
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// You can add body-parser, routes, etc. later

app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to CRUD API tutorial!</h1>
    `);
  });

  export default app;