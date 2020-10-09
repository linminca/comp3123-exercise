const fs = require("fs")

const path = require('path'); 

__dirname = "Logs";
if (!fs.existsSync(__dirname)) {
    // Do something

    fs.mkdir(__dirname, (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory is created.");
    }); 
}  
// else{
//     console.log("Error: directory already exists");
// }
 
// Include process module 
const process = require('process'); 
    
// Printing current directory 
 console.log("current working directory: "
         + process.cwd()); 
try { 
    
// Change the directory 
process.chdir(__dirname); 
// console.log("working directory after "
//         + "changing: " + process.cwd()); 
} catch (err) { 
    
// Printing error if occurs 
console.error("error occured while "
        + "changing directory: " + err); 
}; 


for(i = 0; i< 10; i++){
    // writeFile function with filename, content and callback function
    fs.writeFile(`newfile${i}.txt`, 'Learn Node FS module', function (err) {
        if (err) throw err;  
    });
}


console.log("current working directory: "
         + process.cwd()); 
__dir2 = process.cwd();

process.chdir(__dir2); 

console.log("working directory after "
         + "changing: " + process.cwd()); 

         
if (fs.existsSync(__dirname)) {
    // Do something

    
  fs.readdir(__dirname, (err, files) => { 
      if (err) 
        console.log(err); 
      else { 
        files.forEach(file => { 
            console.log(file); 
        });
      } 
    }) 
}


  
 
 
