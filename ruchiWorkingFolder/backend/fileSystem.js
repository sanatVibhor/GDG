//console.log("from fs module");

//fs- file system in JS
//helps to interact with files and directories
//built in module it is



/*
sync -> fs.ReadFileSync -> blocks the code until the operation is complete
async -> fs.readFile ->  non-blocking, uses callabs or promises.


why fs?
1. file to read or write
2. create, delete, rename etc
3.log files
4. configuration package.json

*/
const fs = require('fs');
//write a file

fs.writeFile('GDG.txt', "file created for sanat", 
    (err)=>{
    if(err) throw err;
    console.log('file created');
})

//append to a file
fs.appendFile('GDG.txt', '\nI am showing fs module to GDG batch',(err)=>
{
    if(err){
        throw err;
    }
    console.log("file has been appended.")
})

//Read a file

//GPT-> text -> API OPENAI-> text ->text -> can we work on responses by AI from fs module.
fs.readFile('GDG1.txt','utf8', (err,data)=>{
    if(err){
        throw err;
    }
    console.log("this is the text from file",data);
});

