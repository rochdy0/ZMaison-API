import express from "express";

const app = express();
const port: number = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`ZMaisonAPI is running on port ${port}.`);
});

app.use('/v1/users', require('./src/routes/user.ts'))

app.use((req, res) => {
  res.status(404).send({error: "Not Found", message: ""})
})