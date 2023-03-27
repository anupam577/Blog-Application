import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();


const app = express();


// Cors 
const corsOptions = {
//   origin:"https://beamish-kelpie-3f8dbb.netlify.app"
  origin:process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  ],

  
  allowedHeaders: [
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ],
 
};

Connection();
app.use(cors());
app.use(cors(corsOpts));
app.use(cors(corsOptions))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;

app.get("/fon",(req,resp)=>{
    resp.send("Hello")

})


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
