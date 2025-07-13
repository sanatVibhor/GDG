/*
cors -> cross origin resource sharing.



FE-> localhost:5173 -> 5173
BE- > localhost:3000


computer -> 5173 - > server X
5173 - 3000 FE <-> BE


*/

const express =require("express")
const cors = require("cors")
const app = express();
app.use(cors({
    origin:"*"  //port
 }))
 app.get("/data", (req,res)=>{
    res.json([{

        id:1,
        "name": "sanat",
        "email":"sanat@gmail.com"
    }])
 })

 app.listen(4000);
