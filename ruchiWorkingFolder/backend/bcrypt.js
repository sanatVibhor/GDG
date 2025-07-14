//bcrypt: is a library which is used to hash password

const bcrypt = require("bcryptjs");
const password = "Qwe23@$$//password";

bcrypt.hash(password,10, (err, hashedPassword)=>{
    if(err){
        console.log("error hashing password");
        return;
    }
    console.log("not hashed password is ",password);
    console.log("hashed password is",hashedPassword);

})


//authentication and authorization
//usermanagement -> 50 -> data -> branchmanger, branchdirector. ceo@factory.com


//ceo-> 50 factories -> full data
//branchmanager-> data for that branch