const fs = require('fs');
//write a file
fs.writeFileSync('example.txt','writing using node js after read sync');
const data = fs.readFileSync('example.txt','utf-8');
//console.log(data);

//read a file
const dataread = fs.readFileSync('example.txt','utf-8');
console.log(dataread)

//Append a file
fs.appendFile('example.txt', '\nNew line added',(err)=>{
    if(err) throw err;
    console.log("content appended");
});

//rename a file
fs.rename('example.txt','exampleNameChange.txt', (err)=>{
    if(err) throw err;
    console.log('file renamed')
})