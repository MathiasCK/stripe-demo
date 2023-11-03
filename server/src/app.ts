import express from 'express'

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`
  🚀 Server ready at: http://localhost:${port}
  🔓︎ Environments: ${process.env.NODE_ENV}
  💳 Stripe application demo is up and running!🌟`);
});
