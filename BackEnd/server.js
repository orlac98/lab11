const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const strConnection = 'mongodb+srv://orlac98:orlac98@cluster1.gqskz.mongodb.net/MyFilms?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

const Scheme = mongoose.Schema;
const movieSchema = new mongoose.Schema({
    Title:String,
    Year:String,
    Poster:String
})

const movieModel = mongoose.model('film', movieSchema);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/movies', (req, res) => {

movieModel.find((err,data)=>{
    res.json(data);
})
})

app.get('/api/movies/:id',(req, res)=>{

    console.log(req.params.id);

    movieModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
  
})
app.delete('/api/movies/:id', (req, res) =>{
    console.log('Delete Movie:'+req.params.id);

    movieModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

app.post('/api/movies', (req, res) => {
    console.log(req.body);


    movieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    })
    
    res.send('Data Recieved');
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})


//Backend folder created and server.js file added into it
//installed cors and added the given code to avoid being given errors

//mongoose imported to connect to database
//pasted in connection string schema added 
