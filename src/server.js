const app = require('./app');

const port = process.env.PORT_SERVER || 3000;

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
