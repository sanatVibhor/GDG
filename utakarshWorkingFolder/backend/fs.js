console.log("fs executed")

const fs=require('fs');

fs.writeFile('GDG.txt', "file created for sanat",
    (err)=>{
    if(err) throw err;
    console.log('file created');
});

fs.appendFile('GDG.txt', '\nI am showing fs module to GDG batch',(err)=>{
    if(err){
        throw err;
    }
        console.log("file has been appended.")
});

fs.readFile('GDG.txt','utf8', (err,data)=>{
    if(err){
        throw err;
    }
        console.log("this is the text from file",data);
});


// fs.rename('GDG.txt', 'GDG_renamed.txt', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('File has been renamed.');
// });

// fs.unlink('GDG_renamed.txt', (err) => {
//     if (err) throw err;
//     console.log('GDG_renamed.txt was deleted');
// });

// fs.mkdir('newFolder', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// });