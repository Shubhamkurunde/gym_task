const jwt = require('jsonwebtoken');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const cors = require('cors');
app.use(cors());

const mysql = require('mysql');
const { threadId} = require('worker_threads');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'gym'
});

connection.connect(err =>{
    if(err){
        console.log('error connecting: ' + err.stack);
    } else {
        console.log('connected to database: ' + threadId)
    }
});

const trainer = 'asdfghjkl';
const joiner = 'qwertyuiop';

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const address = req.body.address;
    const mobile = req.body.mobile;
    const age = req.body.age;
    const usertype = req.body.usertype;
    const query = 'INSERT INTO signup(username,password,name,address,mobile,age,usertype) VALUES (?,?,?,?,?,?,?)';
    connection.query(query,[username,password,name,address,mobile,age,usertype],(err,data)=>{
        if(err){
            res.status(500).send({
                success:false,
                msg:err.sqlMessage,
                data:[]
            });
        }else{
            res.status(200).send({
                success:true,
                msg:"Signup Succesfull",
                data:data
            });
        }
    });
    
    
    
    

})

const port = 7500;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
