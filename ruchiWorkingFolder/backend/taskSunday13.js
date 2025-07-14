const express = require('express');
const app = express();

require('dotenv').config(); 
const mongoUrl = process.env.MONGO_URL;
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

// ENABLE CORS AND JSON PARSING

app.use(cors());
app.use(express.json());

//MONGODB ATLAS CONNECT

const MONGO_URI = mongoUrl;

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=> console.log('db connected')).catch((err)=> console.log('error in db connection'));

//SCHEMA DESIGN

const studentSchema = new mongoose.Schema({
    name : String,
    course : String,
    regno : String
});

const Student = mongoose.model('Students', studentSchema, 'ruchinew001');  

//GET STUDENT

app.get('/students', async(req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }catch(err){
        res.status(500).json({error: 'Error in fetching students'});
    }
});

// POST STUDENT

app.post('/students', async(req,res)=> {
    const {_id,name,course,regno} = req.body;

    if(!name || !course){
        return res.status(400).json({error :'Name and course are required'});
}
        try{
            const newStudent = new Student({_id,name,course,regno});
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent); 
        }catch(err){
            res.status(500).json({error : 'Error saving data od student'});
        }
    
});

//LISTEN PORT

app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT}`);
});