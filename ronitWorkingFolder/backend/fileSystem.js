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


fs.rename('GDG.txt', 'GDG_renamed.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File has been renamed.');
}


.unlink('GDG_renamed.txt', (err) => {
    if (err) throw err; 
    console.log('GDG_renamed.txt was deleted');
}



.mkdir('newFolder', (err) => {
    if (err) throw err;
    console.log('Directory created');
}   
);
console.log("fs executed");
    

