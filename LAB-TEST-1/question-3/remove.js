const fs = require("fs")

const path = require('path'); 


__dirname = "Logs";

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

    fs.rmdir(__dirname, { recursive: true }, (err) => {
      if (err) {
          throw err;
      }
  
      console.log(`${__dirname} is deleted!`);
    });
}else{
  console.log("Error: directory not exists");
}
