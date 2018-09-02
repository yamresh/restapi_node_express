import express from 'express';;
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

// Change the user name and password
const uri = `mongodb+srv://admin:amresh@cluster0-zukw6.mongodb.net/test?retryWrites=true`;
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect(uri);


const app = express();
const port = 4001;


mongoose.connect(uri)


// body parser setup
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('public'))
routes(app);

app.get('/', (req, res) => {
  res.send(`server is running on ${port} `)
})

app.listen(port, ()=> {
  console.log(`Server is running on ${port}`)
})
