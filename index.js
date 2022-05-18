require('dotenv').config();

const app = reqiure('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})

module.exports = requiere('./app');
