const fs = require("fs")

const path = require('path'); 


if (!fs.existsSync("Logs")) {
    // Do something

    fs.mkdir(path.join(__dirname, 'Logs'), (err) => { 
        if (err) { 
            return console.error(err); 
        } 
        console.log('Directory created successfully!'); 
    }); 

    // Include process module 
const process = require('process'); 
  
// Printing current directory 
console.log("current working directory: "
          + process.cwd()); 
try { 
      
  // Change the directory 
  process.chdir('../os'); 
  console.log("working directory after "
          + "changing: " + process.cwd()); 
} catch (err) { 
    
  // Printing error if occurs 
  console.error("error occured while "
        + "changing directory: " + err); 
} 
    
}