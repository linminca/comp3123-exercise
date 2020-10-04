var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/index.htm', (req, res) => {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/hello',(req, res)=>{
   console.log("Hello Express JS")
})

app.get('/user',(req,res)=>{
   //Prepare output in JSON format
   let response = {
      first_name:"Pritesh",
      last_name:"Patel"
   };

   console.log(response);
   res.end(JSON.stringify(response));
})


var server = app.listen(8091, () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
