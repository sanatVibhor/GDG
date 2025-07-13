//HTTP -> hypertext transfer protocol.

/*

hypertext -> text that contaimns links to other texts eg :web pages
transfer -> the act of moving data from one place to another : 200, 404 , 400 ,500 etc 
protocol : rules that define how data is exchanged. 

http -> communication protocol, that helps in transfering data like html, images etc

between -> client and server


HTTPS : hypertext transfer protocol. + secure // adds-> add encryption via SSL/TLS for secure comunication



HTTP: status codes -> 3 digit number returned by server in response to clinet request.



1XX- > information based codes

these are temporary responses during the request processing.

100 -> continue -request is ok continue sending.
101->swicyhing protocols -> clinet asked to switch

2xx -> success

200 -> ok -> standard response for sucess
201- created - resourse sucessfully created .

3xx- redirection

301- URL is changed
302- found -> temp moved


4xx- client error
400 -> bad request -> server cannot understand the request
401-> unautharised -> you dont have access
404- > not found -> resource does not exist.


5xx- server error 
500 - internal server error -> server crsh etc







200 -> sucess -> page request has been fetched
400-> bad request->
401->1 this requires user authentication-> www-authenticate header.

403- forbidden- >request that was sent has been undestood by the server but it still refuses to fulfil it.

500 -> Internal server error.

*/

/*


HTTP -> 5 types of request

GET
POST
PUT
DELETE


get- > it is used to retrieve data from a database.
post-submit data to the databse for creating
put-> used to update the existing resourse
delete -> used to delete a resourse from the databse



*/

// const http = require('http')
// const app = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.write("hrllo world");
//             res.end();
//         }
//         else if( req.method==="POST" && req.url==="/signup"){
//             req.on("data", (e)=>{
//                 res.write(e)
//                 res.end()
//                 console.log(e.toString())
//             })
//         }

//         else if(req.method=="POST" && req.url ===" /login"){
//             req.on("data", (e)=>{
//                 res.write(e)
//                 res.end();
//             })
//         }

// })

// module.exort=app;



/*
MERN-> mongo, express, react and node.
HTTP-> slow
express -> fast plus less code.
http - independent module.
express ->which is made on top of HTTP 


framework and not a module, it gives you an APi. functioning web server with all convience.

*/


const express =require('express')
const app = express();
app.get("/",(rea,res)=>{
    res.send("Hi this server works on express")

})

app.post("/host/:id", (req,res)=>{
    if(req.id===5){
        req.on("data",(decode)=>{
res.send(decode.toString())
console.log(decode)
        })
    }
})

app.listen()