const fs = require('fs');
//write a file


fs.writeFile('GDG.txt', "file created for Prishu",
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
fs.readFile('GDG.txt','utf8', (err,data)=>{
    if(err){
        throw err;
    }
    console.log("this is the text from file",data);
});


fs.rename('GDG.txt', 'GDG_renamed.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
});


fs.unlink('GDG_renamed.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});


fs.mkdir('GDGFolder', (err) => {
    if (err) throw err;
    console.log('Directory created successfully');
});
