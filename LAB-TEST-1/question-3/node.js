const fs = require("fs")
const path = require('path')


fs.rmdir("Logs", () => { 
    console.log("Folder Deleted!"); 
    getCurrentFilenames(); 
  }); 