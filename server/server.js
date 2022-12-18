const express=require("express");
const mysql=require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const app=express();
const port=process.env.port;

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

const db = mysql.createPool({
    connectionLimit:100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE, 
    port: DB_PORT
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, ()=>{console.log("Server started at port: " + port);});

app.post("/register", async (req, res) => {
    const user = req.body.username;
    console.log(user);
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    
    db.getConnection(async (err, connection) => {
        if (err) throw err
        const sqlSearch="SELECT * FROM user WHERE username=?";
        const searchQuery=mysql.format(sqlSearch, [user]);
        const sqlInsert="INSERT INTO user VALUES(0,?,?)";
        const insertQuery=mysql.format(sqlInsert,[user,hashedPassword]);

        await connection.query(searchQuery, async(err,result) => {
            if(err) throw err
            console.log(result.length);

            if(result.length!=0) {
                connection.release();
                console.log("------> User already exists");
                res.sendStatus(409);
            }
            else{
                await connection.query (insertQuery, (err, result)=> {
                    connection.release();
                    if (err) throw (err)
                    console.log ("--------> Created new User");
                    console.log(result.insertId);
                    res.sendStatus(201);
            })}
        })
    })    
})

app.post("/login", (req, res)=> {
    const user = req.body.username;
    const password = req.body.password;
    db.getConnection ( async (err, connection)=> {
            if (err) throw (err)
            const sqlSearch = "SELECT * FROM user WHERE username=?";
            const search_query = mysql.format(sqlSearch,[user]);
            await connection.query (search_query, async (err, result) => {
            connection.release();
      
            if (err) throw (err)
            if (result.length == 0) {
                console.log("--------> User does not exist");
                res.sendStatus(404);
            } 
            else {
                const hashedPassword = result[0].password
                if (await bcrypt.compare(password, hashedPassword)) {
                    console.log("---------> Login Successful "+user);
                    res.send(`${user} is logged in!`);
                } 
                else {
                    console.log("---------> Password Incorrect");
                    res.send("Password incorrect!");
                } 
            }
        })
    }) 
}) 