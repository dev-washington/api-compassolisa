const cors = require('cors');
const app = require('./app');

const port = process.env.PORT_SERVER || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
