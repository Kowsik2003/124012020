const express = require("express");
require('dotenv').config();
const app = express();

const errCtrl = require('./controller/errorCtrl')

const train = require('./routes/train');

app.use(express.json());

app.use('/',train);

app.use(errCtrl);
app.listen(process.env.PORT,() => console.log(`Running . . . ${process.env.PORT}`));