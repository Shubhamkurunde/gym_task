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
    database: 'gym_task'
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
    const usertype = req.body.usertype
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
});

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const query = 'SELECT * FROM signup WHERE username = ? AND password = ?';
    connection.query(query,[username,password],(err,data)=>{
        if(err){
            res.status(500).send({
                success:false,
                msg:err.sqlMessage,
                data:[]
            })
        }else if( data.length > 0 && data[0].usertype == 0){
            const user = {
                id:data[0].id,
                username:data[0].username,
                usertype:data[0].usertype,
                name:data[0].name
            }
            const token = jwt.sign(user,trainer,{ expiresIn:'72h'});
            res.send({
                success:true,
                msg:"Login succesful as Trainer",
                data:token,
                usertype: user
            });
        }else if (data.length > 0 && data[0].usertype == 1){
            const user = {
                id:data[0].id,
                username:data[0].username,
                usertype:data[0].usertype
            }
            const token = jwt.sign(user,joiner,{ expiresIn:'72h'});
            res.send({
                success:true,
                msg:"Login successful as joiner",
                data:token
            });
        }else{
            res.status(500).send({
                success:false,
                msg:"Invalid User",
                data:[]
            });
        }
    });
});

app.get("/get_single_id/:id",(req,res)=>{
    const id = req.params.id;
    const query = 'SELECT name,age,usertype FROM signup WHERE id = ?';
    connection.query(query,[id],(err,data)=>{
        if(err){
            res.status(500).send({
                success:false,
                msg : err,
                data:[]
            })
        }else{
            res.status(200).send({
                success:true,
                msg:"success",
                data:data.affectedRow
            });
        }
    });
});


const port = 7500;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
