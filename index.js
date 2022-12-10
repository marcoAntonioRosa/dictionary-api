const app = require('./server')

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Dictionary API (MongoDB) is running on port ${PORT}.`);
});