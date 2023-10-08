const express = require('express');
const { connectToDb, getDb } = require('./db');
let cors = require("cors");


const PORT = 3000;

const app = express();
app.use(cors());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

app.get('/1', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:1})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/2', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:2})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/3', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:3})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/4', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:4})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/5', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:5})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/6', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:6})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/7', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:7})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/8', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:8})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/9', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:9})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});

app.get('/10', (req, res) => {
  const places = [];

  db
    .collection('mycollection')
    .find({number:10})
    .forEach((place) => places.push(place))
    .then(() => {
      res
        .status(200)
        .json(places);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});