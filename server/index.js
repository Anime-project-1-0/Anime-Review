const express = require('express');
const bodyParser = require('body-parser');
const Anime = require('../database-mongodb/Anime.js');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/anime',(req,res)=>{
  Anime(req.body).save().then((g)=>res.json(g))
})

app.get('/api/anime', function(req, res) {
  Anime.find().then( results => {
    res.json(results);   
  }).catch(err => console.log(err)) 
});

app.post('/api/anime', (req, res) => {
  // delete req.body._id;
  const thing = new Anime({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'created'}))
    .catch(error => res.status(400).json({ error }));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
  