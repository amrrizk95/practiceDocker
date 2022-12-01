const express=require('express');
const mongoose=require('mongoose')

const PORT=4000;
const app =express();
const DB_USER='root';
const DB_POSW='example';
const DB_HOST='mongo';
const DB_PORT=27017;

// for mongodb
const URI=`mongodb://${DB_USER}:${DB_POSW}@${DB_HOST}:${DB_PORT}`;
mongoose
.connect(URI).
then(()=>console.log('connecting to db...')) 
.catch((err)=>console.log(`faild to connect to db with error`,err));




app.get('/', (req,res)=> {
    res.send(`<h1>hello meroo95 </h1>`);

})

app.listen(PORT,() => console.log(`app is runing and lisgning on port ${PORT}`))