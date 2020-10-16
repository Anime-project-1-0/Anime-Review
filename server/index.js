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



// app.patch('/api/anime/:id', (req, res) => {
//   Anime.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Object modified!'}))
//     .catch(error => res.status(400).json({ error }));
// });
app.patch('/api/anime/:id', (req, res) => {
  var id = req.params.id;
  var like = req.body.like + 1;
  console.log(req.body.like)
  Anime.findOneAndUpdate({_id : id}, {like: like}).then(results => res.json(results)).catch(error => res.status(500).json({ error }));
});


app.post('/api/anime/:id', (req, res) => {
  var id = req.params.id;
  var dislike = req.body.dislike + 1;
  console.log(typeof req.body.dislike)
  Anime.findOneAndUpdate({_id : id}, {dislike: dislike}).then(results => res.json(results)).catch(error => res.status(500).json({ error }));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
  