import express from "express";
import bodyParser from "body-parser";
import path from "path";
const app = express();
const PORT = 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//serve static with express
app.use(express.static(`${__dirname}/../react-client/dist`));
//wildcard recieves single-page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
//To make sure things run w/ some basic feedback
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));