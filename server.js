const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
 
dotenv.config();

const corsOptions = {
    //origin: 'https://easypassword-gen.vercel.app', 
    origin: 'http://localhost:5173', 
    credentials: true,
  };
  

 

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
 

app.use('/api/v1', require('./routes/palindromeRoutes'));
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


