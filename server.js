const express = require("express"); 
const app = express(); 
const PORT = 8080; 




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})


app.get('/hello/:name', (req, res) => {
    let name = req.params.name 
    res.send (`Hello ${name}!`)
}); 

