const express =  require('express');

const router = require('./routes/api');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const request=require ('request')
const bodyParser = require('body-parser')
const cors=require ('cors')

const app = express();
dotenv.config();

app.use(bodyParser.json())
app.use(cors());

app.use('/persons', router);


const ConectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
mongoose.connect(process.env.CONNECTION_URL,
    ConectionParams
).then(() => {
    console.log("db connected");
}).catch((err) => { console.log("error:: ", err); })


app.listen(5000,()=>
{
    console.log('listening')
})



