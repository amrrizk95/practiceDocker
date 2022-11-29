const express=require('express');
const mongoose=require('mongoose')
const redis=require('redis'); 
const {Client}=require('pg');



const PORT=4000;
const app =express();
const DB_USER='root';
const DB_POSW='example';
const DB_HOST='postgres';
const DB_PORT=5432;
const redisPort=6379;
const redisHost='redis';
const redisClient=redis.createClient({
    url: `redis://${redisHost}:${redisPort}`
});
redisClient.on('error',(err)=>console.log('Redis Client Error',err));
redisClient.on('connect',(err)=>console.log('connecting successfully'));
redisClient.connect();

//const URI=`postgresql://${DB_USER}:${DB_POSW}@${DB_HOST}:${DB_PORT}`;
redisClient.on('error',(err)=>console.log('Redis Client Error',err));
redisClient.on('connect',(err)=>console.log('connecting successfully'));
redisClient.connect();

const URI=`mongodb://${DB_USER}:${DB_POSW}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(()=>console.log('connecting to db...')).catch((err)=>console.log(`faild to connect to db with error`,err));

app.get('/',(req,res)=> {
    redisClient.set('product','products....');
    res.send('<h1>hello meroo95</h1>');

})

app.get('/data',async (req,res)=> {
    const products=await redisClient.get('product')
    res.send(`<h1>hello meroo95 ${products}</h1>`);

})

app.listen(PORT,() => console.log(`app is runing and lisgning on port ${PORT}`))