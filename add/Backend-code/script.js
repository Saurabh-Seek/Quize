const path = require('path')
const express = require('express');
const app = express();
const port = 8081;
const staicPath = path.join(__dirname,"../public");
app.use(express.static(staicPath))
// app.get('/',(req,res) =>{
//     res.send('htllo ')
// })


app.listen(port ,(req,res) =>{
console.log(`Listening on port  ${port}`);
})